"use client";
import { getProducts } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export const OtherProducts = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts = await getProducts();

      // Shuffle the products array randomly
      const shuffledProducts = fetchedProducts.sort(() => Math.random() - 0.5);

      // Select only the first 4 products
      setProducts(shuffledProducts.slice(0, 4));
    }
    fetchProducts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">You Might Also Like</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/productpage/${product?.id}`}>
            <div className="border rounded-lg p-4 shadow hover:shadow-lg transition h-[480px]">
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={192}
                height={192}
                className="w-full h-72 object-cover rounded"
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
          </Link>
        ))}
      </div>
    </section>
  );
};
