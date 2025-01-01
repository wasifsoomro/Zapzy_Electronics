export default function DeliveryDetails() {
    return (
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <header className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">Delivery Details</h1>
            <p className="text-xl font-light tracking-wide">Everything you need to know about our delivery process.</p>
          </div>
        </header>
  
        {/* Delivery Information Section */}
        <section className="py-24 px-4 border-b border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">How Our Delivery Works</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              At Shop.co, we strive to provide fast and reliable delivery services to all our customers. Here's everything you need to know about our delivery process.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-8 border border-gray-100 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-black mb-4">Order Processing</h3>
                <p className="text-gray-600 text-lg">
                  Once your order is placed, our team will process it within 24 hours, ensuring that all items are in stock and ready for shipment.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-black mb-4">Shipping Methods</h3>
                <p className="text-gray-600 text-lg">
                  We offer a variety of shipping options, including standard and expedited shipping, to ensure your order arrives at your doorstep on time.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-black mb-4">Tracking Your Order</h3>
                <p className="text-gray-600 text-lg">
                  Once your order is shipped, we’ll send you an email with a tracking number so you can monitor your package’s journey to your address.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Delivery Time Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Delivery Timeframes</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              We aim to deliver your order as quickly as possible. Below are our estimated delivery times based on your location:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="p-8 border border-gray-100 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-black mb-4">Domestic Shipping</h3>
                <p className="text-gray-600 text-lg">
                  Estimated delivery time: 3-5 business days. Delivery times may vary based on location and availability.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-black mb-4">International Shipping</h3>
                <p className="text-gray-600 text-lg">
                  Estimated delivery time: 7-14 business days, depending on customs processing and location.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-lg text-center">
                <h3 className="text-2xl font-semibold text-black mb-4">Expedited Shipping</h3>
                <p className="text-gray-600 text-lg">
                  For faster delivery, we offer expedited shipping with an estimated delivery time of 1-3 business days.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Shipping Costs Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Shipping Costs</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              Shipping costs vary depending on the delivery location, weight of the order, and the shipping method selected. Below are our standard shipping rates:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="p-8 border border-gray-100 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-black mb-4">Standard Shipping</h3>
                <p className="text-gray-600 text-lg">
                  $5.99 - 7.99 for orders under $50.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-black mb-4">Expedited Shipping</h3>
                <p className="text-gray-600 text-lg">
                  $15.99 - 20.99 for orders under $50.
                </p>
              </div>
              <div className="p-8 border border-gray-100 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-black mb-4">Free Shipping</h3>
                <p className="text-gray-600 text-lg">
                  Free standard shipping on orders over $50.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Contact for Delivery Queries Section */}
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Need Assistance?</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              If you have any further questions or need assistance with your delivery, please don't hesitate to contact our support team. We're here to help!
            </p>
            <a
              href="mailto:support@shop.co"
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </section>
      </div>
    );
  }
  