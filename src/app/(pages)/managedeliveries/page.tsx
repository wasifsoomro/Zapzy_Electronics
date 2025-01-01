"use client"
export default function ManageDeliveriesFAQPage() {
    return (
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <header className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">Manage Your Deliveries</h1>
            <p className="text-xl font-light tracking-wide">Find helpful information on how to track, update, and manage your deliveries.</p>
          </div>
        </header>
  
        {/* FAQ Section */}
        <section className="py-24 px-4 border-b border-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Frequently Asked Questions</h2>
            
            {/* FAQ 1 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-black mb-4">1. How can I track my delivery?</h3>
              <p className="text-gray-800 text-lg leading-relaxed font-light mb-4">
                To track your delivery, log into your account and navigate to the 'Orders' or 'Manage Deliveries' section. You'll see a list of all your deliveries and their statuses. Click on the 'Track Delivery' button next to each order to get real-time updates on its location and expected delivery time.
              </p>
            </div>
  
            {/* FAQ 2 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-black mb-4">2. Can I change the delivery address after placing the order?</h3>
              <p className="text-gray-800 text-lg leading-relaxed font-light mb-4">
                Once an order has been placed and is processing, you may not be able to change the shipping address immediately. However, if the order is still in the "Processing" stage, you can contact our customer support team to request an address change. Please ensure the change is made before the item is shipped out to avoid delays.
              </p>
            </div>
  
            {/* FAQ 3 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-black mb-4">3. What should I do if my delivery is delayed?</h3>
              <p className="text-gray-800 text-lg leading-relaxed font-light mb-4">
                If your delivery is delayed, please check the tracking information for any updates. Sometimes deliveries are delayed due to weather conditions or logistical issues. If the delay is significant or if you need assistance, feel free to reach out to our customer support team for more details.
              </p>
            </div>
  
            {/* FAQ 4 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-black mb-4">4. How can I change my preferred delivery time?</h3>
              <p className="text-gray-800 text-lg leading-relaxed font-light mb-4">
                To update your preferred delivery time, go to your account settings and navigate to the 'Delivery Preferences' section. You can select a preferred delivery time (morning, afternoon, or evening) to suit your schedule. Make sure to save any changes before placing a new order.
              </p>
            </div>
  
            {/* FAQ 5 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-black mb-4">5. Can I cancel my delivery?</h3>
              <p className="text-gray-800 text-lg leading-relaxed font-light mb-4">
                If the delivery is still in the processing stage, you may be able to cancel it by contacting customer support. However, once the order has shipped or is out for delivery, cancellation may not be possible. Please refer to our cancellation policy or reach out to support for more assistance.
              </p>
            </div>
  
            {/* FAQ 6 */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-black mb-4">6. What if I missed my delivery?</h3>
              <p className="text-gray-800 text-lg leading-relaxed font-light mb-4">
                If you missed your scheduled delivery, don't worry! The carrier will usually make another attempt or leave a note with instructions on how to reschedule. You can also contact customer support to arrange a new delivery time or pick-up option.
              </p>
            </div>
          </div>
        </section>
  
        {/* Contact Support Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Still Have Questions?</h2>
            <p className="text-lg text-gray-800 mb-8">
              If you need further assistance or have additional questions, feel free to contact our customer support team. We're here to help!
            </p>
            <button
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              onClick={() => window.location.href = "/contact-support"}
            >
              Contact Support
            </button>
          </div>
        </section>
      </div>
    );
  }
  