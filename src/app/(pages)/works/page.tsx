export default function Works() {
    return (
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <header className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">How Shop.co Works</h1>
            <p className="text-xl font-light tracking-wide">A seamless and effortless shopping experience every step of the way.</p>
          </div>
        </header>
  
        {/* How It Works Section */}
        <section className="py-24 px-4 border-b border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">How Shop.co Works</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              At Shop.co, we’ve streamlined every step of your shopping journey to provide a smooth, enjoyable experience. 
              Here’s how it works:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">Browse Products</h3>
                <p className="text-gray-600">Start by exploring our vast collection of products. Use filters to find exactly what you need.</p>
              </div>
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">Add to Cart</h3>
                <p className="text-gray-600">Once you find the perfect item, simply add it to your cart. You can continue shopping or proceed to checkout.</p>
              </div>
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">Secure Checkout</h3>
                <p className="text-gray-600">Review your items, choose a payment method, and complete your purchase with our secure checkout process.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Order Fulfillment Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Order Fulfillment</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              Once you’ve placed your order, we take care of the rest. Our efficient fulfillment process ensures your order reaches you promptly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">Processing Your Order</h3>
                <p className="text-gray-600">We verify your payment and prepare your items for dispatch.</p>
              </div>
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">Shipping</h3>
                <p className="text-gray-600">Your order is shipped via a trusted courier for fast and secure delivery.</p>
              </div>
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">Receive Your Order</h3>
                <p className="text-gray-600">Your items arrive at your doorstep, carefully packaged and ready to enjoy.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Returns & Support Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Easy Returns & Support</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              We make shopping stress-free with our easy returns policy and dedicated customer support team available 24/7.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">Hassle-Free Returns</h3>
                <p className="text-gray-600">If you're not satisfied with your purchase, return it easily within 30 days for a full refund.</p>
              </div>
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
                <p className="text-gray-600">Our customer support team is here to assist you with any questions or concerns at any time.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  