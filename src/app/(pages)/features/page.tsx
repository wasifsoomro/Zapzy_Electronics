export default function Features() {
    return (
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <header className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">Features of Shop.co</h1>
            <p className="text-xl font-light tracking-wide">Discover the exceptional features that make Shop.co unique.</p>
          </div>
        </header>
  
        {/* Feature Highlights Section */}
        <section className="py-24 px-4 border-b border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Key Features</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              Our platform offers an array of features designed to provide an unmatched shopping experience.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4">Curated Collection</h3>
                <p className="text-gray-600">Explore our carefully curated selection of premium products that cater to your every need.</p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4">Seamless Shopping</h3>
                <p className="text-gray-600">Enjoy a smooth, intuitive shopping experience from browsing to checkout.</p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4">Fast & Secure Shipping</h3>
                <p className="text-gray-600">We guarantee fast and secure shipping to get your products delivered promptly.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Advanced Features Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Advanced Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4">AI-Powered Recommendations</h3>
                <p className="text-gray-600">Personalized product recommendations based on your browsing and purchase history.</p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <p className="text-gray-600">Read honest reviews from fellow customers to make informed decisions.</p>
              </div>
              <div className="feature-card">
                <h3 className="text-xl font-semibold mb-4">Wishlist</h3>
                <p className="text-gray-600">Save your favorite items to your wishlist for future purchases.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Support Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">24/7 Premium Support</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              Our dedicated support team is available 24/7 to assist you with any queries or issues you may encounter.
            </p>
            <p className="text-lg text-gray-600">Get in touch with our customer support team anytime through live chat, email, or phone.</p>
          </div>
        </section>
      </div>
    );
  }
  