import React from "react";

const Home = () => {
  return (
    <section className="w-full h-screen pt-16">
      <div
        className="w-full h-full bg-cover bg-center relative"
        style={{ backgroundImage: "url(/MBrepair.png)" }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Any Repair?
              <br />
              <span className="text-cyan-400">We’ll Fix It in Minutes.</span>
            </h1>

            <p className="mt-4 text-slate-200 text-lg">
              Fast, reliable mobile repair by certified technicians.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-semibold px-6 py-3 rounded-lg transition">
                Get a Quote
              </button>

              <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition">
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
