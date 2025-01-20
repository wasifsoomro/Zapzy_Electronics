"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Define the type for a product
interface Product {
  id: number;
  image: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  discount?: number;
}

const NewArrivals = () => {
  // Use the Product type for products state
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products"); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data.slice(0, 4)); // Fetch only the first 4 products
        setLoading(false);
      } catch (err) {
        setError("Unable to load products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-12">{error}</div>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 id="new-arrivals" className="text-3xl font-bold text-center mb-8">
        NEW ARRIVALS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-100 rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square w-full overflow-hidden rounded-lg mb-4">
              <Image
                src={product.image}
                alt={product.title}
                width={700}
                height={600}
                className="w-full h-full object-cover hover:scale-105 transition-transform"
              />
            </div>

            <h3 className="text-base font-medium mb-2">{product.title}</h3>

            <div className="flex items-center mt-2">
              <span className="text-yellow-500">
                {"★".repeat(
                  Math.min(5, Math.max(0, Math.floor(product.rating)))
                )}
                {"☆".repeat(
                  5 - Math.min(5, Math.max(0, Math.floor(product.rating)))
                )}
              </span>
              <span className="ml-2 text-sm text-gray-500">
                {product.rating ? product.rating : "No rating"}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-lg font-bold">${product.price}</span>
              {product.originalPrice && (
                <span className="text-gray-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
              {product.discount && (
                <span className="text-red-500 text-sm">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <div className="text-center mt-8 bg-slate-100 flex items-center justify-center shadow-lg py-2 w-24 rounded-lg">
          <button className="text-gray-600 hover:text-gray-900 font-medium">
            <Link href="/productpage" title="product page">
              {" "}
              View All{" "}
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
