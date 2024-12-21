"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Product {
  id: number;
  imageslist: string[];
  name: string;
  image: string;
  rating: number;
  price: number;
  originalPrice?: number;
}

const products: Product[] = [
  { id: 1, imageslist: ["/p-1.png", "/p-2.png", "/p-3.png"], name: "Gradient Graphic T-shirt", image: "/gradient-tshirt.png", rating: 3.5, price: 145 },
  { id: 2, imageslist: ["/p-1.png", "/p-2.png", "/polo-tapping.png"], name: "Polo with Tipping Details", image: "/polo-tapping.png", rating: 4.5, price: 180 },
  { id: 3, imageslist: ["/p-1.png", "/p-2.png", "/p-3.png"], name: "Black Striped T-shirt", image: "/black-stripped.png", rating: 5.0, price: 120, originalPrice: 150 },
  { id: 4, imageslist: ["/p-1.png", "/p-2.png", "/p-3.png"], name: "SKINNY FIT JEANS", image: "/skinny-jeans.png", rating: 3.5, price: 240, originalPrice: 260 },
  { id: 5, imageslist: ["/p-1.png", "/p-2.png", "/p-3.png"], name: "CHECKERED SHIRT", image: "/checkered-shirt.png", rating: 4.5, price: 180 },
  { id: 6, imageslist: ["/p-1.png", "/p-2.png", "/p-3.png"], name: "SLEEVE STRIPED T-SHIRT", image: "/striped-tshirt.png", rating: 4.5, price: 130, originalPrice: 160 },
  { id: 7, imageslist: ["/p-1.png", "/p-2.png", "/p-3.png"], name: "VERTICAL STRIPED SHIRT", image: "/vertical-shirt.png", rating: 5.0, price: 212, originalPrice: 232 },
  { id: 8, imageslist: ["/p-1.png", "/p-2.png", "/p-3.png"], name: "COURAGE GRAPHIC T-SHIRT", image: "/courage-shirt.png", rating: 4.0, price: 145 },
  { id: 9, imageslist: ["/p-1.png", "/p-2.png", "/p-3.png"], name: "ONE LIFE GRAPHIC T-SHIRT", image: "/p-main.png", rating: 4.5, price: 260 },
  { id: 10, imageslist: ["/p-1.png", "/p-2.png", "/p-3.png"], name: "LOOSE FIT BERMUDA SHORTS", image: "/short.png", rating: 3.0, price: 80 },
];

const ProductDetail = ({ id }: { id: string }) => {
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:px-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-gray-700">Home</a>
        <span className="mx-2">›</span>
        <a href="/shop" className="hover:text-gray-700">Shop</a>
        <span className="mx-2">›</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Thumbnails */}
        <div className="hidden lg:flex flex-col gap-4 lg:col-span-2">
          {product.imageslist.map((image, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition"
            >
              <Image
                src={image}
                alt={String(index)}
                width={90}
                height={90}
                className="w-full h-[165px] object-cover"
              />
            </div>
          ))}
        </div>

        {/* Main Product Image */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="border rounded-lg p-4 bg-gray-50 w-full max-w-md">
            <Image
              src={product.image}
              alt="Main Product Image"
              width={400}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:col-span-5">
          <h1 className="text-3xl font-bold mb-4 leading-tight text-gray-900">
            {product.name}
          </h1>

          {/* Price Section */}
          <div className="flex items-center gap-4 mb-4">
            <span className="text-2xl font-bold">${product.price}</span>
            {product.originalPrice && (
              <span className="line-through text-gray-400">${product.originalPrice}</span>
            )}
            {product.originalPrice && (
              <span className="text-red-500 text-sm font-medium">
                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            )}
          </div>

          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 flex gap-1">
              {[...Array(Math.floor(product.rating))].map((_, i) => <span key={i}>★</span>)}
              {product.rating % 1 !== 0 && <span>★</span>}
              {[...Array(5 - Math.ceil(product.rating))].map((_, i) => <span key={i} className="text-gray-300">★</span>)}
            </div>
            <span className="text-gray-600 ml-2">{product.rating}/5</span>
          </div>

          {/* Product Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            Experience premium comfort and style with our {product.name}. Crafted with high-quality materials, this t-shirt ensures both durability and elegance for casual wear.
          </p>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Select Colors</h3>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-green-700 cursor-pointer ring-2 ring-offset-2 ring-green-700"></div>
              <div className="w-8 h-8 rounded-full bg-teal-500 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-blue-700 cursor-pointer"></div>
              <div className="w-8 h-8 rounded-full bg-black cursor-pointer text-white flex items-center justify-center text-xs">
                S
              </div>
            </div>
          </div>

          {/* Size Options */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Choose Size</h3>
            <div className="flex gap-3">
              {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
                <button
                  key={index}
                  className="border rounded-md px-4 py-2 text-sm hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="flex items-center border rounded-md">
              <button className="px-3 py-2">-</button>
              <input
                type="number"
                defaultValue="1"
                className="w-12 text-center outline-none"
              />
              <button className="px-3 py-2">+</button>
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition w-full sm:w-auto">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
