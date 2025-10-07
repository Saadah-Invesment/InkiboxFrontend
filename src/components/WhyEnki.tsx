"use client";

import React from "react";

const WhyEnki: React.FC = () => {
  return (
    <section
      id="why"
      className="mx-auto container-lg px-4 py-12"
    >
      {/* SEO-friendly heading */}
      <h2 className="font-display text-3xl text-enkiNavy">
        Why families choose Enki Box
      </h2>

      {/* Feature cards grid */}
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-soft border border-black/5 transition-all hover:shadow-lg hover:scale-[1.02] duration-200"
          >
            <div className="text-3xl">{feature.icon}</div>
            <h3 className="mt-3 font-semibold text-lg">{feature.title}</h3>
            <p className="mt-2 text-sm text-enkiNavy/80">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Data-driven list for scalability
const features = [
  {
    icon: "✨",
    title: "Modern tales, timeless values",
    description:
      "Inspired by classic wisdom like Kalila & Dimna, crafted for today’s kids with heart and humor.",
  },
  {
    icon: "🎨",
    title: "Illustrations kids love",
    description:
      "Vivid characters and scenes that make reading a delight at bedtime and beyond.",
  },
  {
    icon: "🔒",
    title: "Secure & global",
    description:
      "Instant e-book delivery and worldwide shipping. Payments are encrypted and trusted.",
  },
];

export default WhyEnki;
