export default function CustomerSupport() {
    return (
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <header className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">Customer Support</h1>
            <p className="text-xl font-light tracking-wide">We're here to help! Find answers to your questions or contact us directly.</p>
          </div>
        </header>
  
        {/* FAQ Section */}
        <section className="py-24 px-4 border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black text-center mb-8 tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">How can I track my order?</h3>
                <p className="text-gray-600">
                  To track your order, simply log in to your account and visit the "Order History" section. You can also use the tracking number provided in the order confirmation email.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy on most items. If you are not satisfied with your purchase, you can return it within 30 days for a full refund or exchange. Please check our return policy for specific details.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">How can I contact customer support?</h3>
                <p className="text-gray-600">
                  You can contact us via email at support@shop.co or call our customer service hotline at +1 800 123 4567. Our support team is available 24/7 to assist you.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I modify or cancel my order?</h3>
                <p className="text-gray-600">
                  Orders can only be modified or canceled within 24 hours of placing the order. Please contact our customer service team as soon as possible if you need to make any changes.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact Form Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black text-center mb-8 tracking-tight">Get in Touch</h2>
            <p className="text-gray-600 text-lg font-light text-center mb-8">
              If you need further assistance, feel free to reach out to us. We're here to help with any inquiries or concerns.
            </p>
            <div className="max-w-2xl mx-auto">
              <form>
                <div className="grid grid-cols-1 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-4 border border-gray-200 rounded-lg"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-4 border border-gray-200 rounded-lg"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full p-4 border border-gray-200 rounded-lg"
                      rows="4"
                      placeholder="How can we assist you?"
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
  
        {/* Support Hours Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Our Support Hours</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              Our support team is available 24/7 to help you with any issues or inquiries. We aim to respond to all messages as soon as possible.
            </p>
            <div className="space-y-6">
              <div className="flex justify-center items-center">
                <span className="text-3xl font-semibold text-black">Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-3xl font-semibold text-black">Sat - Sun: 10:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-center items-center">
                <span className="text-3xl font-semibold text-black">24/7 Email Support Available</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  