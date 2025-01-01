import React from "react";

export default function OrdersFAQPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Order FAQ</h1>
          <p className="text-xl font-light tracking-wide">
            Find answers to your questions about managing and tracking your orders.
          </p>
        </div>
      </header>

      {/* Orders FAQ Content */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Order Management</h2>
          <div className="space-y-8">
            {/* How to place an order */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How do I place an order?</h3>
              <p className="text-lg text-gray-800">
                To place an order, simply browse through our products, add them to your cart, and proceed to checkout. You'll need to provide shipping details and choose a payment method to complete the process.
              </p>
            </div>

            {/* How to track an order */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How can I track my order?</h3>
              <p className="text-lg text-gray-800">
                After placing your order, you will receive an email with tracking information. You can also check the status of your order by visiting the "Order History" section in your account.
              </p>
            </div>

            {/* Order cancellation */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">Can I cancel my order?</h3>
              <p className="text-lg text-gray-800">
                If you wish to cancel your order, you can do so before it is shipped. Go to the "Order History" section in your account and select the option to cancel the order. If the order has already shipped, you may need to initiate a return.
              </p>
            </div>

            {/* How to update order details */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How do I update my order details?</h3>
              <p className="text-lg text-gray-800">
                Order details cannot be modified once the order is placed. However, if you need to make changes to your shipping address or payment method, please contact our customer support team as soon as possible.
              </p>
            </div>

            {/* How to return an order */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How can I return an order?</h3>
              <p className="text-lg text-gray-800">
                To return an order, visit the "Order History" section in your account, where you'll find a return option if your order is eligible for returns. Follow the steps provided to complete the return process.
              </p>
            </div>

            {/* How to request a refund */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How do I request a refund?</h3>
              <p className="text-lg text-gray-800">
                If you are not satisfied with your order or if there is an issue with it, you can request a refund by visiting your "Order History" and selecting the "Request Refund" option. Follow the instructions provided for processing your refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Need Further Assistance?</h2>
          <p className="text-lg text-gray-800 mb-8">
            If your question isn't answered here, our support team is ready to assist you with any order-related concerns.
          </p>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
