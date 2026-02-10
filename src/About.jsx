import React from "react";
import { Wrench, ShieldCheck, Clock, Users } from "lucide-react";

const stats = [
  { label: "Devices Repaired", value: "10,000+" },
  { label: "Happy Customers", value: "8,500+" },
  { label: "Years Experience", value: "5+" },
  { label: "Expert Technicians", value: "15+" },
];

const About = () => {
  return (
    <section className="w-full bg-slate-100 pt-24">
      {/* HERO */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-10 text-white shadow-lg">
          <h1 className="text-4xl md:text-5xl font-extrabold">
            About QuickFix
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl">
            Trusted mobile repair experts delivering fast, reliable, and
            affordable smartphone repair services.
          </p>
        </div>
      </div>

      {/* STORY */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-slate-600 mb-4">
            QuickFix was founded with a simple goal — to make mobile repair
            stress-free and trustworthy. We understand how important your phone
            is to your daily life, and our mission is to get it back in your
            hands as quickly as possible.
          </p>
          <p className="text-slate-600">
            Our technicians are trained professionals using high-quality parts
            and advanced tools to ensure your device performs like new.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <ShieldCheck className="w-6 h-6 text-cyan-500 mt-1" />
              <span className="text-slate-600">
                Provide honest pricing with no hidden charges.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Clock className="w-6 h-6 text-cyan-500 mt-1" />
              <span className="text-slate-600">
                Deliver fast repairs without compromising quality.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Wrench className="w-6 h-6 text-cyan-500 mt-1" />
              <span className="text-slate-600">
                Use high-quality parts and certified repair methods.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose QuickFix?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Certified Technicians",
              "Quick Turnaround",
              "Affordable Pricing",
              "Warranty on Repairs",
            ].map((item, index) => (
              <div key={index} className="bg-slate-800 rounded-xl p-6">
                <h3 className="font-semibold text-lg">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-3xl font-extrabold text-cyan-500">
                {stat.value}
              </h3>
              <p className="text-slate-600 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-cyan-500 py-16 text-center px-6">
        <h2 className="text-3xl font-bold text-slate-900">
          Need a Trusted Mobile Repair?
        </h2>
        <p className="mt-3 text-slate-800">
          Visit our store or book a repair online today.
        </p>
        <button className="mt-6 bg-slate-900 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
          Book a Repair
        </button>
      </div>
    </section>
  );
};

export default About;
