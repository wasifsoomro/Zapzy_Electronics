export default function FreeEBooksPage() {
    return (
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <header className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">Free eBooks</h1>
            <p className="text-xl font-light tracking-wide">
              Download a variety of eBooks for free to enhance your knowledge.
            </p>
          </div>
        </header>
  
        {/* eBooks List Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">
              Available eBooks
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              Explore a wide range of eBooks available for free download. Select your desired eBook and start learning today.
            </p>
  
            {/* eBooks Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* eBook 1 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-black mb-4">JavaScript for Beginners</h3>
                <p className="text-gray-700 mb-4">
                  A great starting point for beginners to learn the fundamentals of JavaScript.
                </p>
                <a
                  href="/ebooks/javascript-for-beginners"
                  className="inline-block text-blue-500 hover:underline"
                >
                  Download eBook
                </a>
              </div>
  
              {/* eBook 2 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-black mb-4">Mastering React</h3>
                <p className="text-gray-700 mb-4">
                  Dive deep into React and learn advanced concepts and best practices for building scalable applications.
                </p>
                <a
                  href="/ebooks/mastering-react"
                  className="inline-block text-blue-500 hover:underline"
                >
                  Download eBook
                </a>
              </div>
  
              {/* eBook 3 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-black mb-4">CSS Flexbox Guide</h3>
                <p className="text-gray-700 mb-4">
                  Learn how to use CSS Flexbox for creating flexible and responsive layouts in web design.
                </p>
                <a
                  href="/ebooks/css-flexbox-guide"
                  className="inline-block text-blue-500 hover:underline"
                >
                  Download eBook
                </a>
              </div>
  
              {/* eBook 4 */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-black mb-4">HTML5 & CSS3 Cookbook</h3>
                <p className="text-gray-700 mb-4">
                  A comprehensive guide to HTML5 and CSS3 features, techniques, and tricks for modern web development.
                </p>
                <a
                  href="/ebooks/html5-css3-cookbook"
                  className="inline-block text-blue-500 hover:underline"
                >
                  Download eBook
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  