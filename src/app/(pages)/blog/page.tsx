import React from 'react';

export default function HowToBlogPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">How to Blog</h1>
          <p className="text-xl font-light tracking-wide">
            Learn the essential steps to create a successful blog. Whether you're just starting or looking to improve, this guide will help you get there.
          </p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-24 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Why Start a Blog?</h2>
          <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
            Blogging is a powerful way to share your ideas, build your brand, and even make money. It gives you a platform to connect with an audience, share your expertise, and establish yourself as an authority in your niche.
          </p>
        </div>
      </section>

      {/* Step-by-Step Guide Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Steps to Start Blogging</h2>
          
          {/* Step 1 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-black">Step 1: Choose Your Blog Niche</h3>
            <p className="text-gray-600">
              The first step in starting a blog is choosing a niche. Focus on a topic you're passionate about and knowledgeable in. Whether it's technology, travel, food, or personal finance, ensure your niche has an audience.
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-black">Step 2: Select a Blogging Platform</h3>
            <p className="text-gray-600">
              Choose a blogging platform that suits your needs. WordPress, Wix, and Squarespace are popular options. These platforms offer easy-to-use tools for creating and managing your blog.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-black">Step 3: Design Your Blog</h3>
            <p className="text-gray-600">
              The design of your blog should reflect your niche and audience. Keep it simple and user-friendly. Choose a responsive theme and customize it with your logo and branding.
            </p>
          </div>

          {/* Step 4 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-black">Step 4: Create Engaging Content</h3>
            <p className="text-gray-600">
              Your content is the heart of your blog. Write posts that offer value to your readers. Provide helpful tips, answer common questions, and share your unique insights to build trust and authority.
            </p>
          </div>

          {/* Step 5 */}
          <div className="space-y-6 mb-12">
            <h3 className="text-2xl font-semibold text-black">Step 5: Promote Your Blog</h3>
            <p className="text-gray-600">
              Once your blog is live, promote it through social media, email marketing, and SEO. Use keywords to make your blog posts rank higher on search engines, and engage with your audience regularly to build a loyal community.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Blogging Tips for Success</h2>
          
          {/* Tips List */}
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li><strong>Be Consistent:</strong> Publish content regularly to keep your audience engaged and improve your SEO ranking.</li>
            <li><strong>Focus on Quality:</strong> Don't just post for the sake of posting. Ensure your content is well-researched, valuable, and well-written.</li>
            <li><strong>Engage with Your Audience:</strong> Respond to comments and messages from your readers. Building a community around your blog will lead to loyal followers.</li>
            <li><strong>Optimize for SEO:</strong> Use the right keywords, meta tags, and internal links to increase your chances of appearing in search engine results.</li>
            <li><strong>Monetize Your Blog:</strong> Explore different monetization methods such as affiliate marketing, sponsored posts, and selling your own products or services.</li>
          </ul>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Resources for Bloggers</h2>
          <p className="text-gray-600 mb-8">
            Below are some helpful resources to aid in your blogging journey:
          </p>
          
          {/* Resource Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-4">Blogging Courses</h3>
              <p className="text-gray-600 mb-4">
                Learn the ins and outs of blogging with these in-depth courses. Perfect for beginners and seasoned bloggers.
              </p>
              <a href="#" className="text-blue-500 hover:underline">View Courses</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-4">SEO Tools</h3>
              <p className="text-gray-600 mb-4">
                Optimize your blog content with these SEO tools. Rank higher on Google and get more traffic to your posts.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Explore Tools</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black mb-4">Content Ideas Generator</h3>
              <p className="text-gray-600 mb-4">
                Stuck for blog post ideas? Use this generator to get fresh content ideas for your blog.
              </p>
              <a href="#" className="text-blue-500 hover:underline">Generate Ideas</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start Your Blogging Journey Today!</h2>
          <p className="text-lg mb-6">Blogging can change your life. Take the first step today, and create content that resonates with people around the world!</p>
          <a href="#" className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">Start Blogging Now</a>
        </div>
      </section>
    </div>
  );
}
