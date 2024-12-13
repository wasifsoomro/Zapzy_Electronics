import React from "react";

const Testimonials = () => {

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-center uppercase mb-8">
          Our Happy Customers
        </h2>

        {/* Testimonial Cards */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-1 mb-4">
              {/* Stars */}
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-semibold">Sarah M.</span>
              <span className="text-green-500">✔</span>
            </div>
            <p className="text-gray-700">
            &quot;I&apos;m blown away by the quality and style of the clothes I received
              from Shopo.co. From casual wear to elegant dresses, every piece
              I&apos;ve bought has exceeded my expectations.&quot;
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-semibold">Alex K.</span>
              <span className="text-green-500">✔</span>
            </div>
            <p className="text-gray-700">
            &quot;Finding clothes that align with my personal style used to be a
              challenge until I discovered Shopo.co. The range of options they
              offer is truly remarkable, catering to a variety of tastes and
              occasions.&quot;
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-500">★</span>
              ))}
            </div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-semibold">James L.</span>
              <span className="text-green-500">✔</span>
            </div>
            <p className="text-gray-700">
            &quot;As someone whos always on the lookout for unique fashion pieces,
              I&apos;m thrilled to have stumbled upon Shopo.co. The selection of
              clothes is not only diverse but also on-point with the latest
              trends.&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
