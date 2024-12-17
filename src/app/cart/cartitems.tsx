interface CartItemProps {
    id: number;
    name: string;
    size: string;
    color: string;
    price: number;
    image: string;
  }
  
  const CartItem: React.FC<CartItemProps> = ({ name, size, color, price, image }) => {
    return (
      <div className="flex items-center justify-between border-b py-4">
        {/* Product Image */}
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={name}
            className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md"
          />
          <div>
            <h2 className="text-md md:text-lg font-semibold leading-tight">{name}</h2>
            <p className="text-sm text-gray-500">
              Size: <span className="text-black">{size}</span>
            </p>
            <p className="text-sm text-gray-500">
              Color: <span className="text-black">{color}</span>
            </p>
          </div>
        </div>
  
        {/* Price */}
        <div className="text-md md:text-lg font-bold">${price}</div>
      </div>
    );
  };
  
  export default CartItem;