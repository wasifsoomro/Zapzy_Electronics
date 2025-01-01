import React from "react";

export default function PaymentsFAQPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Payment FAQ</h1>
          <p className="text-xl font-light tracking-wide">
            Find answers to your questions about payments, methods, and security.
          </p>
        </div>
      </header>

      {/* Payment FAQ Content */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Payments and Billing</h2>
          <div className="space-y-8">
            {/* Accepted payment methods */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">What payment methods do you accept?</h3>
              <p className="text-lg text-gray-800">
                We accept a variety of payment methods, including major credit and debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For more details, check the payment options available at checkout.
              </p>
            </div>

            {/* Payment processing time */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How long does it take for my payment to be processed?</h3>
              <p className="text-lg text-gray-800">
                Payments are typically processed within a few minutes. If you chose to pay by bank transfer, it may take up to 1&ndash;2 business days for the payment to be confirmed.
              </p>
            </div>

            {/* Payment failure issues */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">What should I do if my payment fails?</h3>
              <p className="text-lg text-gray-800">
                If your payment fails, please check your payment details and try again. If the issue persists, make sure that your payment method has sufficient funds or contact your payment provider for assistance. You can also reach our support team for further help.
              </p>
            </div>

            {/* How to update payment information */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How do I update my payment information?</h3>
              <p className="text-lg text-gray-800">
                You can update your payment details by logging into your account, going to the &ldquo;Payment Methods&rdquo; section, and adding or updating your preferred payment method.
              </p>
            </div>

            {/* Payment security */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">Is my payment information secure?</h3>
              <p className="text-lg text-gray-800">
                Yes, your payment information is secured through encryption and processed through trusted payment gateways. We take security very seriously and ensure that your payment details are protected.
              </p>
            </div>

            {/* Refund process */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How do I request a refund?</h3>
              <p className="text-lg text-gray-800">
                To request a refund, please go to the &ldquo;Order History&rdquo; section in your account and select the &ldquo;Request Refund&rdquo; option for the eligible order. Refunds will be processed according to our return policy.
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
            If you have any further questions about payments, feel free to contact our support team for assistance.
          </p>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
