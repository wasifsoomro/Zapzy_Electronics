import React from 'react';

export default function YouTubePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">How to Start on YouTube</h1>
          <p className="text-xl font-light tracking-wide">
            Create and grow your YouTube channel with this step-by-step guide. Learn how to produce engaging content, build your audience, and become a YouTube star!
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-24 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Why YouTube?</h2>
          <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
            YouTube is one of the largest platforms for content creators worldwide. It&apos;s a fantastic way to showcase your talents, share knowledge, and even build a business around your videos. Learn how to get started with creating and growing your YouTube channel.
          </p>
        </div>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">How to Start Your YouTube Channel</h2>

          {/* Step 1 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-black">Step 1: Create a YouTube Account</h3>
            <p className="text-gray-600">
              The first step to starting a YouTube channel is creating a Google account. Once you&apos;ve done that, you can create a YouTube account and set up your channel.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-black">Step 2: Define Your Niche</h3>
            <p className="text-gray-600">
              It&apos;s essential to pick a niche for your YouTube channel. Whether it&rsquo;s education, entertainment, gaming, beauty, or travel, find a topic you&apos;re passionate about and that has a dedicated audience.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-black">Step 3: Create Your First Video</h3>
            <p className="text-gray-600">
              Make sure your first video is high-quality and engaging. Introduce yourself, explain your channel&rsquo;s purpose, and share what viewers can expect. Ensure that the video is well-lit, with clear audio and a great thumbnail.
            </p>
          </div>

          {/* Step 4 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-black">Step 4: Optimize Your Videos for SEO</h3>
            <p className="text-gray-600">
              YouTube is a search engine, so optimizing your video titles, descriptions, and tags is crucial. Use relevant keywords to increase visibility and help your videos get discovered.
            </p>
          </div>

          {/* Step 5 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-black">Step 5: Engage with Your Audience</h3>
            <p className="text-gray-600">
              Engagement is key to growing your YouTube channel. Respond to comments, ask for feedback, and encourage viewers to like, share, and subscribe to your channel.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">YouTube Tips for Success</h2>

          {/* Tips List */}
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li><strong>Be Consistent:</strong> Upload videos on a regular schedule so your audience knows when to expect new content.</li>
            <li><strong>Create High-Quality Content:</strong> Focus on creating value for your audience with each video.</li>
            <li><strong>Thumbnails Matter:</strong> A good thumbnail can increase your click-through rate. Make sure it&rsquo;s eye-catching and relevant to the content.</li>
            <li><strong>Use Analytics:</strong> YouTube provides detailed analytics to help you understand your audience and improve your content strategy.</li>
            <li><strong>Collaborate with Others:</strong> Collaboration can help you reach new audiences and gain more subscribers.</li>
          </ul>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Resources for YouTube Creators</h2>
          <p className="text-gray-600 mb-8">
            Here are some great resources to help you grow your YouTube channel:
          </p>

          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-4">Video Editing Software</h3>
              <p className="text-gray-600 mb-4">
                Discover the best video editing software for YouTube creators. Whether you&rsquo;re a beginner or an expert, there&rsquo;s a tool that fits your needs.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Explore Video Editors</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-4">SEO for YouTube</h3>
              <p className="text-gray-600 mb-4">
                Learn how to optimize your videos to rank higher on YouTube and attract more viewers. These SEO tips will help you get discovered.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Learn YouTube SEO</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-4">YouTube Monetization</h3>
              <p className="text-gray-600 mb-4">
                Understand how to monetize your YouTube channel through ads, sponsorships, affiliate marketing, and more.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Monetize Your Channel</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start Your YouTube Journey Today!</h2>
          <p className="text-lg mb-6">Creating a YouTube channel can open doors to countless opportunities. Start creating, share your passion, and connect with an audience around the world.</p>
          <a href="#" className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">Create Your Channel Now</a>
        </div>
      </section>
    </div>
  );
}
