import React from "react";

const Home = () => {
  return (
    <section className="w-full pt-20 bg-slate-200">
      {/* Hero Image Card */}
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="relative h-[520px] rounded-2xl overflow-hidden shadow-lg bg-cover bg-center"
          style={{ backgroundImage: "url(/MBrepair.png)" }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center px-10">
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
      </div>

      {/* Cards Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-cyan-100 mb-4">
              <svg
                className="w-7 h-7 text-cyan-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7a4 4 0 01-8 0"
                />
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11v6m-3-3h6"
                />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-800 mb-3">
              Trusted Professionals
            </h1>
            <p className="text-slate-600">
              Our certified technicians deliver reliable and high-quality mobile
              repairs.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-indigo-100 mb-4">
              <svg
                className="w-7 h-7 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 3"
                />
                <circle cx="12" cy="12" r="9" strokeWidth={2} />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-800 mb-3">
              Quick Turnaround
            </h1>
            <p className="text-slate-600">
              Most repairs are completed within minutes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-lg bg-emerald-100 mb-4">
              <svg
                className="w-7 h-7 text-emerald-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4"
                />
                <circle cx="12" cy="12" r="9" strokeWidth={2} />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-slate-800 mb-3">
              Free Diagnostics
            </h1>
            <p className="text-slate-600">
              Complete device inspection at no cost.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-2">
        <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
          Book a Repair
        </button>
      </div>
      {/*mobile cards */}
      <div className="bg-slate-200 py-5">
        <h1 className="text-center text-3xl font-bold text-grey-300 mb-12">
          Any kind of repairs.... One stop solution
        </h1>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-100 rounded-xl p-6 hover:scale-105 transition">
            <img
              src="/iphone.png"
              alt="iPhone Repair"
              className="w-16 h-16 mb-4"
            />
            <h1 className="text-black text-xl font-semibold mb-2">iPhone</h1>
            <p className="text-slate-700 text-sm">
              Screen, battery, camera, and charging port repairs done fast and
              safely.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-100 rounded-xl p-6 hover:scale-105 transition">
            <img src="/ipad.png" alt="iPad Repair" className="w-16 h-16 mb-4" />
            <h1 className="text-black text-xl font-semibold mb-2">iPad</h1>
            <p className="text-slate-700 text-sm">
              Complete iPad repairs including display, battery, and software
              issues.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-100 rounded-xl p-6 hover:scale-105 transition">
            <img
              src="/android.png"
              alt="Android Repair"
              className="w-16 h-16 mb-4"
            />
            <h1 className="text-black text-xl font-semibold mb-2">Android</h1>
            <p className="text-slate-700 text-sm">
              All Android brands supported with quick diagnostics and repairs.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-slate-100 rounded-xl p-6 hover:scale-105 transition">
            <img
              src="/tablet.png"
              alt="Tablet Repair"
              className="w-16 h-16 mb-4"
            />
            <h1 className="text-black text-xl font-semibold mb-2">Tablet</h1>
            <p className="text-slate-700 text-sm">
              Reliable tablet repairs for screens, batteries, and performance
              issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
