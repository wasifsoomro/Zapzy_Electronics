"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProducts } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";

// Define types for cart items and products
interface CartItem {
  id: number;
  size: string;
  color: string;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const CartItem = () => {
  const { productDetails } = useParams(); // Fetch `productDetails` from the URL
  const [cart, setCart] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products data from the API
    const fetchProducts = async () => {
      const productsData = await getProducts();
      setProducts(productsData);
    };

    fetchProducts();

    // Fetch cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (cart.length === 0) {
    return <div className="text-center text-lg font-semibold mt-8">Your cart is empty!</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4">
      {cart.map((cartItem) => {
        const product = products.find((item) => item.id === cartItem.id);

        if (!product) {
          return null
        }
        return (
          <div key={cartItem.id} className="flex items-center justify-between border-b py-4">
            {/* Product Image and Details */}
            <div className="flex items-center gap-4">
              <img
                src={urlFor(product.image).url()}
                alt={product.name}
                className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-md"
              />
              <div>
                <h2 className="text-md md:text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">
                  Size: <span className="text-black">{cartItem.size}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Color: <span className="text-black">{cartItem.color}</span>
                </p>
                <p className="text-sm text-gray-500">
                  Quantity: <span className="text-black">{cartItem.quantity}</span>
                </p>
              </div>
            </div>

            {/* Price */}
            <div className="text-md md:text-lg font-bold">
              ${(product.price * cartItem.quantity).toFixed(2)}
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(cartItem.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CartItem;
