import React, { useEffect, useState } from "react";

const slides = [
  {
    title: "Any Repair?",
    highlight: "We’ll Fix It in Minutes.",
    desc: "Fast, reliable mobile repair by certified technicians.",
  },
  {
    title: "Special Offer",
    highlight: "Get 20% OFF",
    desc: "Limited time discount on all mobile repairs.",
  },
  {
    title: "New Users Deal",
    highlight: "Flat 30% OFF",
    desc: "Exclusive first-time customer offer.",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full pt-20 bg-slate-200">
      {/* ===== HERO SLIDER ===== */}
      <div className="max-w-7xl mx-auto my-5 px-6 overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="min-w-full h-[520px] relative rounded-2xl overflow-hidden shadow-lg bg-cover bg-center"
              style={{ backgroundImage: "url(/MBrepair.png)" }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center px-10">
                <div className="max-w-xl">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                    {slide.title}
                    <br />
                    <span className="text-cyan-400">{slide.highlight}</span>
                  </h1>

                  <p className="mt-4 text-slate-200 text-lg">{slide.desc}</p>

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
          ))}
        </div>
      </div>

      {/* ===== INFO CARDS ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <h1 className="text-xl font-bold mb-3">Trusted Professionals</h1>
            <p className="text-slate-600">
              Certified technicians with quality assurance.
            </p>
          </div>

          <div className="bg-slate-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <h1 className="text-xl font-bold mb-3">Quick Turnaround</h1>
            <p className="text-slate-600">
              Most repairs completed within minutes.
            </p>
          </div>

          <div className="bg-slate-100 rounded-xl p-8 shadow-md hover:shadow-lg transition">
            <h1 className="text-xl font-bold mb-3">Free Diagnostics</h1>
            <p className="text-slate-600">Complete inspection at no cost.</p>
          </div>
        </div>
      </div>

      {/* ===== BOOK BUTTON ===== */}
      <div className="flex justify-center my-6">
        <button className="bg-gradient-to-r from-indigo-500 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:scale-105 transition">
          Book a Repair
        </button>
      </div>

      {/* ===== MOBILE CARDS ===== */}
      <div className="bg-slate-200 py-10">
        <h1 className="text-center text-3xl font-bold mb-12">
          Any kind of repairs.... One stop solution
        </h1>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { img: "/iphone.png", title: "iPhone" },
            { img: "/ipad.png", title: "iPad" },
            { img: "/android.png", title: "Android" },
            { img: "/tablet.png", title: "Tablet" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-100 rounded-xl p-6 hover:scale-105 transition"
            >
              <img src={item.img} className="w-16 h-16 mb-4" />
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <p className="text-sm text-slate-700">
                Screen, battery, camera & software repairs.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
