"use client";
import Image from "next/image";
import React, { useState } from "react";
import { GoChevronRight } from "react-icons/go";
import PagesBar from "./Pagebar";

const CategoryPage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>("green");
  const [selectedSize, setSelectedSize] = useState<string>("Large");

  const colors = ["green", "yellow", "orange", "blue", "black", "pink", "white"];
  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  interface Product {
    id: number;
    name: string;
    image: string;
    rating: number;
    price: number;
    originalPrice?: number;
  }

  const products: Product[] = [
    { id: 1, name: "Gradient Graphic T-shirt", image: "/gradient-tshirt.png", rating: 3.5, price: 145 },
    { id: 2, name: "Polo with Tipping Details", image: "/polo-tapping.png", rating: 4.5, price: 180 },
    { id: 3, name: "Black Striped T-shirt", image: "/black-stripped.png", rating: 5.0, price: 120, originalPrice: 150 },
    { id: 4, name: "SKINNY FIT JEANS", image: "/skinny-jeans.png", rating: 3.5, price: 240, originalPrice: 260 },
    { id: 5, name: "CHECKERED SHIRT", image: "/checkered-shirt.png", rating: 4.5, price: 180 },
    { id: 6, name: "SLEEVE STRIPED T-SHIRT", image: "/striped-tshirt.png", rating: 4.5, price: 130, originalPrice: 160 },
    { id: 7, name: "VERTICAL STRIPED SHIRT", image: "/vertical-shirt.png", rating: 5.0, price: 212, originalPrice: 232 },
    { id: 8, name: "COURAGE GRAPHIC T-SHIRT", image: "/courage-shirt.png", rating: 4.0, price: 145 },
    { id: 9, name: "LOOSE FIT BERMUDA SHORTS", image: "/short.png", rating: 3.0, price: 80 },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-8">
      {/* Sidebar Section */}
      <div className="w-full lg:w-1/4 xl:w-1/5">
        <div className="flex items-center p-2 lg:p-4 mt-2 lg:mt-0">
          <div>Home</div>
          <GoChevronRight />
          <div>Casual</div>
        </div>

        {/* Sidebar */}
        <div className="bg-white p-4 border rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>

          {/* Categories */}
          <div className="mb-4">
            {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map((category) => (
              <div key={category} className="flex justify-between py-2 cursor-pointer hover:text-black">
                <span>{category}</span>
                <GoChevronRight />
              </div>
            ))}
          </div>

          {/* Price Range */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Price</h3>
            <input type="range" min="50" max="200" className="w-full" />
            <div className="flex justify-between text-sm text-gray-500">
              <span>$50</span>
              <span>$200</span>
            </div>
          </div>

          {/* Colors */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Colors</h3>
            <div className="grid grid-cols-4 gap-2">
              {colors.map((color) => (
                <div
                  key={color}
                  className={`w-6 h-6 rounded-full cursor-pointer ${selectedColor === color ? "ring-2 ring-black" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="mb-4">
            <h3 className="font-semibold mb-2">Size</h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  className={`px-3 py-1 border rounded text-sm ${
                    selectedSize === size ? "bg-black text-white" : "bg-gray-100 text-gray-700"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <button className="w-full bg-black text-white py-2 rounded">Apply Filter</button>
        </div>
      </div>

      {/* Product Grid Section */}
      <div className="w-full lg:w-3/4 xl:w-4/5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h1 className="text-2xl font-bold mb-2 sm:mb-0">Casual</h1>
          <div className="text-sm text-gray-500">
            Showing 1-10 of 100 Products
            <select className="ml-2 border border-gray-300 rounded px-2 py-1">
              <option>Most Popular</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
              <Image
                src={product.image}
                alt={product.name}
                width={192}
                height={192}
                className="w-full h-54 object-cover rounded"
              />
              <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
              <div className="flex items-center mt-2">
                <span className="text-yellow-500">
                  {"★".repeat(Math.floor(product.rating))}
                  {"☆".repeat(5 - Math.floor(product.rating))}
                </span>
                <span className="ml-2 text-sm text-gray-500">{product.rating}/5</span>
              </div>
              <div className="mt-4">
                <span className="text-lg font-bold">${product.price}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-sm line-through text-gray-500">${product.originalPrice}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6">
          <PagesBar />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;