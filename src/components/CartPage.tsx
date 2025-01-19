"use client";

import React, { useState, useEffect } from "react";
import CartItem from "./CartItem";
import OrderSummary from "./OrderSummary";
import Link from "next/link";

interface CartItemProps {
  id: number;
  size: string;
  color: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemProps[]>([]);

  // Fetch cart items from localStorage or API (this is just a mockup)
  useEffect(() => {
    const fetchCartItems = () => {
      // For demonstration, we're using localStorage, you could replace this with an API call
      const items = localStorage.getItem("cartItems");
      if (items) {
        setCartItems(JSON.parse(items));
      } else {
        // Fallback if no cart items are found
        setCartItems([]);
      }
    };

    fetchCartItems();
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-6 lg:px-20">
      <div className="text-sm text-gray-500 mb-4">
        <Link href="/">Home</Link> &gt;{" "}
        <Link href="/productpage" className="hover:text-gray-700">
          Shop
        </Link>{" "}
        &gt; <span className="text-black font-semibold">Cart</span>
      </div>

      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">YOUR CART</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-4 md:p-6">
          {/* Loop through cartItems */}
          {cartItems.length > 0 ? (
            cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <div>Your cart is empty.</div>
          )}
        </div>

        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-4 md:p-6">
          {/* Order Summary */}
          <OrderSummary  />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
