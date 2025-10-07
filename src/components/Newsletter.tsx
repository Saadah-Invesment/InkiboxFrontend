"use client";

import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  return (
    <>
     
      {/* Newsletter Section */}
      <section id="newsletter" className="max-w-6xl mx-auto container px-4 py-16">
        <div className="bg-enkiNavy text-white rounded-3xl p-8 shadow-lg transition-transform hover:scale-[1.01]">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl">
                Join the Enki Family
              </h2>
              <p className="mt-2 text-white/80 text-base">
                Get new story releases, free printables, and exclusive offers
                in your inbox.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              aria-label="Newsletter Subscription Form"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl text-enkiNavy focus:outline-none focus:ring-2 focus:ring-enkiSun placeholder:text-enkiNavy/50"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-enkiSun text-enkiNavy font-semibold hover:opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>

          {submitted && (
            <p className="mt-6 text-sm text-enkiSun text-center animate-fade-in">
              🎉 Thanks! You’re now subscribed to Enki updates.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Newsletter;
