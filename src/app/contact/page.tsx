import React from 'react';

const contact = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-green-50 to-teal-100"></div>

      {/* Dot Pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00000015 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      {/* Blur Circle */}
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-purple-300 rounded-full blur-3xl opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6 py-10 items-center">

        {/* Left Side */}
        <div>
          <p className="text-gray-500 text-xl mb-2 font-light">Hi, I'm</p>

          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Fazle Rabbi
          </h1>

          <p className="text-gray-500 text-lg max-w-md mb-8 leading-relaxed">
            I'm a Frontend Developer. Frontend Focused Full Stack Developer.
            Building high-performance, TypeScript-based solutions with
            React/Next.js, Node/Express, Supabase, and cloud deployments 🚀
          </p>

          <div className="space-y-3 text-gray-700 text-lg">
            <h1 className="font-semibold">Fazle Rabbi</h1>
            <h2>Contact: +8801516505006</h2>
            <h3>Location: Savar, Dhaka, Bangladesh</h3>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="w-full">
          <div className="border border-white/50 rounded-3xl p-6 md:p-10 bg-white/30 backdrop-blur-md shadow-xl">

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-xl bg-white text-gray-700 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-4 rounded-xl bg-white text-gray-700 outline-none"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-xl bg-white text-gray-700 outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-[#1f1f1f] text-white py-4 rounded-xl hover:bg-black transition"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
    );
};

export default contact;