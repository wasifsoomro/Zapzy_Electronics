import React from "react";

export default function AccountFAQPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Account FAQ</h1>
          <p className="text-xl font-light tracking-wide">
            All your questions about managing your account are answered here.
          </p>
        </div>
      </header>

      {/* Account FAQ Content */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Account Management</h2>
          <div className="space-y-8">
            {/* How to update account details */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How do I update my personal information?</h3>
              <p className="text-lg text-gray-800">
                You can update your personal information by visiting your &quot;Account Settings&quot;. Here, you can modify your name, email address, shipping address, and payment methods.
              </p>
            </div>

            {/* How to view order history */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How can I view my order history?</h3>
              <p className="text-lg text-gray-800">
                You can view your order history by going to the &quot;Order History&quot; section within your account. There, you can see past orders, status updates, and tracking numbers.
              </p>
            </div>

            {/* How to reset password */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How can I reset my password?</h3>
              <p className="text-lg text-gray-800">
                If you&apos;ve forgotten your password, you can reset it by clicking on the &quot;Forgot Password&quot; link on the login page. A password reset email will be sent to your registered email address.
              </p>
            </div>

            {/* How to manage notifications */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How do I manage my email notifications?</h3>
              <p className="text-lg text-gray-800">
                You can customize your email notification preferences by navigating to the &quot;Email Preferences&quot; section in your account settings. Here, you can choose which notifications you want to receive.
              </p>
            </div>

            {/* How to delete account */}
            <div className="faq-item">
              <h3 className="text-2xl font-semibold">How can I delete my account?</h3>
              <p className="text-lg text-gray-800">
                If you&apos;d like to delete your account, please visit the &quot;Account Settings&quot; page, where you will find the option to permanently delete your account. Please note that this action cannot be undone.
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
            If your question isn&apos;t answered here, feel free to reach out to our support team. We&apos;re here to help you!
          </p>
          <button className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">
            Contact Support
          </button>
        </div>
      </section>
    </div>
  );
}
