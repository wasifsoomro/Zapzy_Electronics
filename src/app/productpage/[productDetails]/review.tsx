import React from "react";

export default function Reviews() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <header className="border-b">
        <nav className="flex justify-evenly space-x-8 py-4">
          <a href="#" className="text-gray-500 hover:text-black">Product Details</a>
          <a href="#" className="text-black border-b-2 border-black">Rating & Reviews</a>
          <a href="#" className="text-gray-500 hover:text-black">FAQs</a>
        </nav>
      </header>

      {/* Reviews Section */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">All Reviews (451)</h1>
          <div className="flex space-x-4">
            <select className="border rounded px-4 py-2">
              <option>Latest</option>
              <option>Oldest</option>
            </select>
            <button className="bg-black text-white px-4 py-2 rounded">Write a Review</button>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Review Card */}
          {Array(6).fill("").map((_, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-sm">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-500">
                  <span>⭐⭐⭐⭐⭐</span>
                </div>
                <span className="ml-2 text-green-500 font-bold">Verified</span>
              </div>
              <h2 className="font-bold">Reviewer Name</h2>
              <p className="text-gray-600 text-sm">&quot;This is a sample review text.&quot;</p>
              <p className="text-gray-400 text-xs mt-2">Posted on August 14, 2023</p>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-8">
          <button className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            Load More Reviews
          </button>
        </div>
      </main>
    </div>
  );
}