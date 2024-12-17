import React from "react";
import CartItem from "./cartitems";
import OrderSummary from "./ordersummary";

const CartPage: React.FC = () => {
  const cartItems = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      size: "Large",
      color: "White",
      price: 145,
      image: "/gradient-tshirt.png",
    },
    {
      id: 2,
      name: "Checkered Shirt",
      size: "Medium",
      color: "Red",
      price: 180,
      image: "/checkered-shirt.png",
    },
    {
      id: 3,
      name: "Skinny Fit Jeans",
      size: "Large",
      color: "Blue",
      price: 240,
      image: "/skinny-jeans.png",
    },
  ];

  return (
    <div className="container mx-auto p-4 md:p-6 lg:px-20">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Home &gt; <span className="text-black font-semibold">Cart</span>
      </div>

      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">YOUR CART</h1>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items Section */}
        <div className="w-full lg:w-2/3 bg-white shadow-md rounded-lg p-4 md:p-6">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>

        {/* Order Summary Sidebar */}
        <div className="w-full lg:w-1/3 bg-white shadow-md rounded-lg p-4 md:p-6">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;