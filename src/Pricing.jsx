import React from "react";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    title: "Screen Repair",
    price: "₹1,499+",
    popular: true,
    features: [
      "High-quality display",
      "Touch & display tested",
      "30–60 min repair time",
      "Warranty included",
    ],
  },
  {
    title: "Battery Replacement",
    price: "₹999+",
    popular: false,
    features: [
      "Long-lasting battery",
      "Fast replacement",
      "Overheating check",
      "Warranty included",
    ],
  },
  {
    title: "Charging Port Repair",
    price: "₹799+",
    popular: false,
    features: [
      "Port cleaning or replacement",
      "Fast charging restored",
      "Data safety assured",
      "Quality testing",
    ],
  },
  {
    title: "Full Service",
    price: "₹2,499+",
    popular: false,
    features: [
      "Complete device check",
      "Software optimization",
      "Internal cleaning",
      "Performance boost",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="w-full bg-slate-100 pt-24">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Transparent Pricing
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
          No hidden charges. High-quality mobile repair services at affordable
          prices.
        </p>
      </div>

      {/* PRICING CARDS */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-2xl p-8 shadow-lg transition hover:-translate-y-1 ${
              plan.popular
                ? "bg-gradient-to-br from-cyan-500 to-indigo-600 text-white"
                : "bg-white"
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-xs font-bold px-4 py-1 rounded-full shadow">
                MOST POPULAR
              </span>
            )}

            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <p className="text-4xl font-extrabold mb-6">{plan.price}</p>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle
                    className={`w-5 h-5 ${
                      plan.popular ? "text-white" : "text-cyan-500"
                    }`}
                  />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-3 rounded-xl font-semibold transition ${
                plan.popular
                  ? "bg-white text-slate-900 hover:bg-slate-100"
                  : "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:scale-105"
              }`}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* BRAND NOTE */}
      <div className="bg-slate-200 py-16 text-center px-6">
        <h2 className="text-2xl font-bold mb-4">
          Pricing Depends on Device Brand
        </h2>
        <p className="text-slate-600 max-w-3xl mx-auto">
          Prices may vary for iPhone, Samsung, OnePlus, Xiaomi, Vivo, Oppo, and
          other brands. Contact us for an exact quote.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-slate-900 py-16 text-center text-white px-6">
        <h2 className="text-3xl font-bold">Need an Exact Price?</h2>
        <p className="mt-3 text-slate-300">
          Call us or WhatsApp your mobile model for a quick quote.
        </p>
        <button className="mt-6 bg-gradient-to-r from-cyan-500 to-indigo-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Get Instant Quote
        </button>
      </div>
    </section>
  );
};

export default Pricing;
