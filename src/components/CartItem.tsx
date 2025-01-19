"use client";

import { useState, useEffect } from "react";
import { urlFor } from "../sanity/lib/image";
import { getProducts } from "../sanity/lib/client";

interface CartItemProps {
  id: number;
  size: string;
  color: string;
  quantity: number;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: any; // Image can be an object, ensure it's an image object
}

const CartItem = ({ cartItem }: { cartItem: CartItemProps }) => {
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const products = await getProducts();
      console.log("Fetched products:", products); // Log fetched products to confirm the data
      const product = products.find((p: any) => p.id === cartItem.id);
      console.log("Found product:", product); // Log found product to confirm match
      setProduct(products || null);
    };

    fetchProduct();
  }, [cartItem.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const removeFromCart = async () => {
    const response = await fetch('/api/cart', {
      method: 'POST',
      body: JSON.stringify({
        action: 'REMOVE',
        product: { id: cartItem.id }
      })
    });
    const data = await response.json();
    // Update cart state or refetch as necessary
  };

  console.log("Product image:", product.image); // Log image to confirm it’s a valid object

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center gap-4">
        {/* Ensure urlFor is handling the image correctly */}
        <img
          src={product.image ? urlFor(product.image).url() : "/fallback-image.jpg"}  // Use fallback image if the image is missing
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

      <div className="text-md md:text-lg font-bold">
        ${(product.price * cartItem.quantity).toFixed(2)}
      </div>

      <button
        onClick={removeFromCart}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
