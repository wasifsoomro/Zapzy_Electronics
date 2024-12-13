import Image from "next/image";

interface ProductCardProps {
    image: string;
    title: string;
    rating: number;
    reviews: number;
    price: number;
    originalPrice?: number;
    discount?: number;
  }
  
  const ProductCard = ({ image, title, rating, reviews, price, originalPrice, discount }: ProductCardProps) => {
    return (
      <div className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow">
        <div className="aspect-square w-full overflow-hidden rounded-lg mb-4">
          <Image
            src={image} 
            alt={title}
            width={700}
            height={600}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>
        
        <h3 className="text-base font-medium mb-2">{title}</h3>
        
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-600 ml-2">({reviews})</span>
        </div>
  
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">${price}</span>
          {originalPrice && (
            <span className="text-gray-500 line-through">${originalPrice}</span>
          )}
          {discount && (
            <span className="text-red-500 text-sm">-{discount}%</span>
          )}
        </div>
      </div>
    );
  };
  
  export default ProductCard;