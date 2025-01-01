export default function Careers() {
    return (
      <div className="bg-white min-h-screen">
        {/* Header Section */}
        <header className="bg-black text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4 tracking-tight">Careers at Shop.co</h1>
            <p className="text-xl font-light tracking-wide">Join our team and be a part of a dynamic and growing eCommerce company.</p>
          </div>
        </header>
  
        {/* Why Work With Us Section */}
        <section className="py-24 px-4 border-b border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Why Work With Us</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              At Shop.co, we value innovation, collaboration, and commitment. We offer a work environment that fosters creativity 
              and professional growth, where you can make a real impact on our business and the world of eCommerce.
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">Innovative Work Culture</h3>
                <p className="text-gray-600">Collaborate with passionate people who share your vision and drive for success.</p>
              </div>
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">Career Growth</h3>
                <p className="text-gray-600">We support your career development with training, mentorship, and advancement opportunities.</p>
              </div>
              <div className="work-card">
                <h3 className="text-xl font-semibold mb-4">Work-Life Balance</h3>
                <p className="text-gray-600">Enjoy flexible working hours and the ability to balance your personal and professional life.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Current Openings Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">Current Job Openings</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              We’re always looking for talented individuals to join our team. Check out our current openings and apply today!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
              <div className="job-card">
                <h3 className="text-xl font-semibold mb-4">Full Stack Developer</h3>
                <p className="text-gray-600">Work on both frontend and backend to create seamless user experiences for our customers.</p>
                <a href="#" className="text-blue-500 mt-4 inline-block">Learn More</a>
              </div>
              <div className="job-card">
                <h3 className="text-xl font-semibold mb-4">Product Designer</h3>
                <p className="text-gray-600">Design user-friendly interfaces and create memorable shopping experiences for our users.</p>
                <a href="#" className="text-blue-500 mt-4 inline-block">Learn More</a>
              </div>
              <div className="job-card">
                <h3 className="text-xl font-semibold mb-4">Marketing Manager</h3>
                <p className="text-gray-600">Lead our marketing campaigns, analyze customer behavior, and drive growth through data-driven strategies.</p>
                <a href="#" className="text-blue-500 mt-4 inline-block">Learn More</a>
              </div>
            </div>
          </div>
        </section>
  
        {/* How to Apply Section */}
        <section className="py-24 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-8 tracking-tight">How to Apply</h2>
            <p className="text-gray-800 text-lg leading-relaxed font-light mb-8">
              We’re excited to hear from you! Applying for a role at Shop.co is easy. Follow the steps below to submit your application.
            </p>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="steps-card">
                <h3 className="text-xl font-semibold mb-4">Step 1: Review Openings</h3>
                <p className="text-gray-600">Browse our current job openings and find the position that aligns with your skills and passion.</p>
              </div>
              <div className="steps-card">
                <h3 className="text-xl font-semibold mb-4">Step 2: Submit Your Resume</h3>
                <p className="text-gray-600">Prepare a resume and cover letter that highlights your experience and why you’d be a great fit for the team.</p>
              </div>
              <div className="steps-card">
                <h3 className="text-xl font-semibold mb-4">Step 3: Interview</h3>
                <p className="text-gray-600">If your application is shortlisted, you’ll be invited for an interview to discuss your skills and experience.</p>
              </div>
              <div className="steps-card">
                <h3 className="text-xl font-semibold mb-4">Step 4: Join the Team</h3>
                <p className="text-gray-600">If we think you’re a good fit, we’ll extend an offer to join the Shop.co family!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  