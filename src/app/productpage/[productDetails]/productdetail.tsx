"use client";
import React, { useState } from "react";
import Image from "next/image";
import products from "../../products.json";
import { useParams } from "next/navigation";
import Link from "next/link";

const ProductDetail = () => {
  const { productDetails } = useParams(); // Fetch the productDetails from the URL
  const product = products.find((item) => item.id === Number(productDetails));

  // State to track the selected color, size, and quantity
  const [selectedColor, setSelectedColor] = useState(
    product ? product.colors[0] : null
  ); // Default to first color
  const [selectedSize, setSelectedSize] = useState(
    product ? product.sizes[0] : null
  ); // Default to first size
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleColorChange = (color: any) => setSelectedColor(color);
  const handleSizeChange = (size: any) => setSelectedSize(size);
  const handleQuantityChange = (operation: any) => {
    setQuantity((prevQuantity) => {
      if (operation === "increment" && quantity < 10) {
        return prevQuantity + 1;
      }
      if (operation === "decrement" && quantity > 1) {
        return prevQuantity - 1;
      }
      return prevQuantity;
    });
  };

  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity,
    };

    // Get the current cart from localStorage (if exists)
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Add the new product to the cart (or update quantity if product already exists)
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto px-4 py-8 lg:px-12">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-gray-700">
          Home
        </a>
        <span className="mx-2">›</span>
        <a href="/shop" className="hover:text-gray-700">
          Shop
        </a>
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
              <span className="line-through text-gray-400">
                ${product.originalPrice}
              </span>
            )}
            {product.originalPrice && (
              <span className="text-red-500 text-sm font-medium">
                -{Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )}
                %
              </span>
            )}
          </div>

          {/* Ratings */}
          <div className="flex items-center mb-4">
            <div className="text-yellow-400 flex gap-1">
              {[...Array(Math.floor(product.rating))].map((_, i) => (
                <span key={i}>★</span>
              ))}
              {product.rating % 1 !== 0 && <span>★</span>}
              {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                <span key={i} className="text-gray-300">
                  ★
                </span>
              ))}
            </div>
            <span className="text-gray-600 ml-2">{product.rating}/5</span>
          </div>

          {/* Product Description */}
          <p className="text-gray-600 leading-relaxed mb-6">
            Experience premium comfort and style with our {product.name}.
            Crafted with high-quality materials, this t-shirt ensures both
            durability and elegance for casual wear.
          </p>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Select Colors</h3>
            <div className="flex gap-3">
              {product.colors.map((color, index) => (
                <div
                  key={index}
                  className={`w-8 h-8 rounded-full cursor-pointer ring-2 ring-offset-2 ${
                    color === selectedColor ? "ring-black" : ""
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                />
              ))}
            </div>
          </div>

          {/* Size Options */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Choose Size</h3>
            <div className="flex gap-3">
              {product.sizes.map((size, index) => (
                <button
                  key={index}
                  className={`border rounded-md px-4 py-2 text-sm ${
                    size === selectedSize ? "bg-gray-200" : "hover:bg-gray-200"
                  }`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="flex items-center border rounded-md">
              <button
                className="px-3 py-2"
                onClick={() => handleQuantityChange("decrement")}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                readOnly
                className="w-12 text-center outline-none"
              />
              <button
                className="px-3 py-2"
                onClick={() => handleQuantityChange("increment")}
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition w-full sm:w-auto"
            >
              <Link href={`/productpage/${product.id}/cart`}>Add to Cart</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
