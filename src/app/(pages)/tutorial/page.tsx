import React from 'react';

export default function DevelopmentTutorialsPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <header className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 tracking-tight">Development Tutorials</h1>
          <p className="text-xl font-light tracking-wide">Enhance your skills with our curated development tutorials. Learn new technologies and boost your career!</p>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="py-24 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Get Started with Development Tutorials</h2>
          <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
            Whether you're a beginner or an experienced developer, we have tutorials for every skill level. Learn programming languages, frameworks, and tools to help you grow as a developer.
          </p>
        </div>
      </section>

      {/* Featured Tutorials Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Featured Tutorials</h2>
          
          {/* Tutorial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-4">React Basics</h3>
              <p className="text-gray-600 mb-4">
                Get introduced to React.js, a powerful JavaScript library for building user interfaces. Learn the basics and build interactive web applications.
              </p>
              <a href="#" className="text-blue-500 hover:underline font-semibold">Start Learning</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-4">Node.js for Beginners</h3>
              <p className="text-gray-600 mb-4">
                Master Node.js to build fast and scalable network applications. Learn the fundamentals and start working with server-side development.
              </p>
              <a href="#" className="text-blue-500 hover:underline font-semibold">Start Learning</a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-semibold text-black mb-4">Advanced CSS Techniques</h3>
              <p className="text-gray-600 mb-4">
                Dive into advanced CSS topics such as flexbox, grid, and animations. Learn how to design responsive and visually appealing websites.
              </p>
              <a href="#" className="text-blue-500 hover:underline font-semibold">Start Learning</a>
            </div>
          </div>
        </div>
      </section>

      {/* All Tutorials Section */}
      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">All Tutorials</h2>
          
          {/* Tutorial List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold text-black">HTML & CSS Fundamentals</h3>
                <p className="text-gray-600">A beginner-friendly course to help you master the building blocks of the web: HTML and CSS.</p>
              </div>
              <a href="#" className="text-blue-500 hover:underline">Start Learning</a>
            </div>

            <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold text-black">JavaScript for Developers</h3>
                <p className="text-gray-600">Learn JavaScript from scratch, including ES6+ features and essential development tools.</p>
              </div>
              <a href="#" className="text-blue-500 hover:underline">Start Learning</a>
            </div>

            <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold text-black">Full-Stack Development</h3>
                <p className="text-gray-600">Master full-stack web development with popular frameworks like React and Node.js.</p>
              </div>
              <a href="#" className="text-blue-500 hover:underline">Start Learning</a>
            </div>

            <div className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
              <div>
                <h3 className="text-xl font-semibold text-black">Python Programming</h3>
                <p className="text-gray-600">Get started with Python, one of the most versatile programming languages. Perfect for web development and data science.</p>
              </div>
              <a href="#" className="text-blue-500 hover:underline">Start Learning</a>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-16 bg-black text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Ready to Level Up Your Skills?</h2>
          <p className="text-lg mb-6">Explore our wide range of development tutorials to accelerate your learning journey. Start building your future today!</p>
          <a href="#" className="px-8 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors">Browse All Tutorials</a>
        </div>
      </section>
    </div>
  );
}
