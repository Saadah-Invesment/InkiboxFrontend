"use client";

import React from "react";

const Payments: React.FC = () => {
  return (
    <section
      id="payments"
      className="mx-auto container-lg px-4 py-12"
      aria-labelledby="payments-heading"
    >
      <div className="bg-white rounded-3xl p-8 shadow-soft border border-black/5 transition-all hover:shadow-lg duration-200">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h2
              id="payments-heading"
              className="font-display text-3xl text-enkiNavy"
            >
              Safe, simple checkout
            </h2>

            <p className="mt-3 text-enkiNavy/80 leading-relaxed">
              Pay securely with major cards, PayPal, or local methods. E-books
              arrive instantly in your inbox. Print editions ship globally with
              tracking. Video purchases include{" "}
              <strong>streaming access via signed URL</strong> (time-limited) or
              an optional <strong>download</strong>.
            </p>

            <ul className="mt-5 space-y-2 text-sm">
              {paymentFeatures.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-enkiNavy/80">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Payment Logos */}
          <div className="bg-gradient-to-br from-white to-amber-50 border border-orange-200 rounded-2xl p-6 shadow-inner">
            <div className="text-sm text-enkiNavy/80 font-medium">
              Payment methods
            </div>

            <div className="mt-3 flex items-center gap-4 flex-wrap">
              {paymentLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8   "
                  loading="lazy"
                />
              ))}
            </div>

            <div className="mt-6 text-xs text-enkiNavy/60">
              Logos are for illustration. Actual options depend on your region.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Data arrays (dynamic + easy to edit)
const paymentFeatures = [
  {
    icon: "🔐",
    text: "TLS/SSL encrypted payments via trusted gateways (Stripe/PayPal).",
  },
  {
    icon: "⚡",
    text: "Instant download links after purchase.",
  },
  {
    icon: "📦",
    text: "Worldwide shipping for print editions.",
  },
];

const paymentLogos = [
  {
    alt: "Visa",
    src: "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
  },
  {
    alt: "Mastercard",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
  },
  {
    alt: "American Express",
    src: "https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg",
  },
  {
    alt: "PayPal",
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
  },
];

export default Payments;
