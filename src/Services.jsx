import React from "react";

const services = [
  {
    title: "Screen Replacement",
    desc: "Cracked or broken screens replaced with high-quality displays.",
    icon: "📱",
  },
  {
    title: "Battery Replacement",
    desc: "Fix fast-draining or dead batteries with long-lasting replacements.",
    icon: "🔋",
  },
  {
    title: "Charging Port Repair",
    desc: "Resolve charging issues caused by faulty or loose ports.",
    icon: "🔌",
  },
  {
    title: "Camera Repair",
    desc: "Front & rear camera repair for blurry or non-working cameras.",
    icon: "📷",
  },
  {
    title: "Speaker & Mic Repair",
    desc: "Fix sound issues, call clarity, and microphone problems.",
    icon: "🔊",
  },
  {
    title: "Water Damage Repair",
    desc: "Professional treatment for water-damaged devices.",
    icon: "💧",
  },
  {
    title: "Software Issues",
    desc: "OS update, app crash, data recovery, and virus removal.",
    icon: "💻",
  },
  {
    title: "Back Glass Repair",
    desc: "Premium back glass replacement for damaged phones.",
    icon: "🛠️",
  },
];

const brands = [
  "Apple (iPhone)",
  "Samsung",
  "OnePlus",
  "Xiaomi / Redmi",
  "Realme",
  "Vivo",
  "Oppo",
  "Motorola",
];

const steps = [
  {
    title: "Book a Repair",
    desc: "Call us or book online to schedule your repair.",
  },
  {
    title: "Free Diagnosis",
    desc: "We inspect your device and explain the issue clearly.",
  },
  {
    title: "Quick Repair",
    desc: "Most repairs completed within 30–60 minutes.",
  },
  {
    title: "Quality Check",
    desc: "Full testing before handing your device back.",
  },
];

const Services = () => {
  return (
    <section className="w-full bg-slate-100 pt-20 my-10">
      {/* ===== HERO ===== */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 text-white shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Mobile Repair Services
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Professional smartphone repair services by certified technicians.
            Fast, affordable, and reliable repairs for all major brands.
          </p>
        </div>
      </div>

      {/* ===== SERVICES GRID ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Repair Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== BRANDS ===== */}
      <div className="bg-slate-200 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Brands We Repair
        </h2>

        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white py-4 rounded-lg shadow-sm font-semibold"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      {/* ===== PROCESS ===== */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Repair Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-md"
            >
              <div className="w-12 h-12 mx-auto flex items-center justify-center rounded-full bg-cyan-500 text-white font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== WHY CHOOSE US ===== */}
      <div className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose QuickFix?</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              "Certified Technicians",
              "Original Quality Parts",
              "Affordable Pricing",
              "Same Day Repair",
            ].map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="bg-cyan-500 py-12 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Need a Repair Today?
        </h2>
        <p className="mt-3 text-slate-800">
          Call us now or book your repair online.
        </p>
        <button className="mt-6 bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition">
          Book a Repair
        </button>
      </div>
    </section>
  );
};

export default Services;
