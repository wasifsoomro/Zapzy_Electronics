"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { getProducts } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";

const ProductDetail = () => {
  const { productDetails } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const products = await getProducts();
        const foundProduct = products.find(
          (item: any) => item.id === productDetails
        );
        setProduct(foundProduct);
        if (foundProduct) {
          setSelectedColor(foundProduct.colors[0]);
          setSelectedSize(foundProduct.sizes[0]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productDetails]);

  const handleColorChange = (color: string) => setSelectedColor(color);
  const handleSizeChange = (size: string) => setSelectedSize(size);
  const handleQuantityChange = (operation: string) => {
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

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    // Show notification
    setNotification("Successfully added to cart");

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 lg:px-12 relative">
      {/* Notification */}
      {notification && (
        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-4 rounded-md shadow-lg z-50 flex items-center gap-3 animate-fadeInOut">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm font-semibold">{notification}</span>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <nav className="flex items-center text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-gray-700">
          Home
        </a>
        <span className="mx-2">›</span>
        <a href="/productpage" className="hover:text-gray-700">
          Shop
        </a>
        <span className="mx-2">›</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sidebar Thumbnails */}
        <div className="hidden lg:flex flex-col gap-4 lg:col-span-2">
          {product.imageslist.map((image: string, index: number) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition"
            >
              <Image
                src={urlFor(image).url()}
                alt={`Image ${index}`}
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
              src={urlFor(product.image).url()}
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
          </div>

          {/* Color Options */}
          <div className="mb-6">
            <h3 className="font-medium mb-2">Select Colors</h3>
            <div className="flex gap-3">
              {product.colors.map((color: string, index: number) => (
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
              {product.sizes.map((size: string, index: number) => (
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
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
