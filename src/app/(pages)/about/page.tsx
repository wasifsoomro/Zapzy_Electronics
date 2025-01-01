export default function About() {
    return (
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <header className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">About Shop.co</h1>
            <p className="text-xl font-light tracking-wide">Elevating style through timeless elegance</p>
          </div>
        </header>
  
        {/* Mission Section */}
        <section className="py-24 px-4 border-b border-gray-100">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Our Mission</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light">
              At Shop.co, we believe in the power of refined aesthetics and exceptional quality. Our curated collection represents 
              the perfect harmony of contemporary design and timeless elegance, delivering an unparalleled shopping experience 
              that transcends ordinary retail.
            </p>
          </div>
        </section>
  
        {/* Stats Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="border-r border-gray-200 last:border-0">
              <h3 className="text-5xl font-bold text-black mb-2">10K+</h3>
              <p className="text-gray-600 uppercase tracking-wider text-sm">Satisfied Clients</p>
            </div>
            <div className="border-r border-gray-200 last:border-0">
              <h3 className="text-5xl font-bold text-black mb-2">5K+</h3>
              <p className="text-gray-600 uppercase tracking-wider text-sm">Curated Items</p>
            </div>
            <div className="border-r border-gray-200 last:border-0">
              <h3 className="text-5xl font-bold text-black mb-2">15+</h3>
              <p className="text-gray-600 uppercase tracking-wider text-sm">Global Markets</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-black mb-2">24/7</h3>
              <p className="text-gray-600 uppercase tracking-wider text-sm">Premium Support</p>
            </div>
          </div>
        </section>
  
        {/* Values Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-black text-center mb-16 tracking-tight">Our Core Principles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="group hover:bg-black hover:text-white transition-all duration-300 p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Uncompromising Quality</h3>
                <p className="font-light leading-relaxed">Excellence in every detail, from material selection to final delivery.</p>
              </div>
              <div className="group hover:bg-black hover:text-white transition-all duration-300 p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Sustainable Vision</h3>
                <p className="font-light leading-relaxed">Pioneering eco-conscious fashion with purpose and integrity.</p>
              </div>
              <div className="group hover:bg-black hover:text-white transition-all duration-300 p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Design Innovation</h3>
                <p className="font-light leading-relaxed">Setting trends while maintaining timeless sophistication.</p>
              </div>
              <div className="group hover:bg-black hover:text-white transition-all duration-300 p-8 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 tracking-tight">Client Excellence</h3>
                <p className="font-light leading-relaxed">Dedicated to exceeding expectations at every interaction.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )}