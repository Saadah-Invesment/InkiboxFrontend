"use client";

import React from "react";

const Stories: React.FC = () => {
  return (
    <section id="stories" className="mx-auto container-lg px-4 py-12">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-3xl text-enkiNavy">
          Featured Stories
        </h2>
        <a
          href="#"
          className="text-enkiSunDark font-semibold hover:underline transition-all"
          aria-label="View all stories"
        >
          View all →
        </a>
      </div>

      {/* Stories Grid */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <article
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-soft border border-black/5 flex flex-col transition-all hover:shadow-lg hover:scale-[1.02] duration-200"
          >
            {/* Emoji Banner */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 h-48 flex items-center justify-center text-6xl">
              {story.emoji}
            </div>

            {/* Story Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg">{story.title}</h3>
              <p className="text-sm text-enkiNavy/80 mt-1">{story.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{story.price}</div>
                  <div className="text-xs text-enkiNavy/60">{story.format}</div>
                </div>

                <button
                  data-sku={story.sku}
                  className="buyBtn px-4 py-2 rounded-lg bg-enkiSunDark text-white text-sm font-semibold hover:bg-enkiSun transition-all"
                >
                  {story.buttonText}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

// Dynamic content data
const stories = [
  {
    emoji: "🦊",
    title: "The Fox & The Starlight",
    description: "A clever fox learns that honesty outshines any shortcut.",
    price: "$4.00",
    format: "E-book (PDF + ePub)",
    sku: "ebook-fox",
    buttonText: "Buy Now",
  },
  {
    emoji: "🦁",
    title: "The Lion’s Gentle Roar",
    description:
      "Strength meets kindness when a prince of the jungle finds a new friend.",
    price: "$9.99",
    format: "Paperback (Ships worldwide)",
    sku: "print-lion",
    buttonText: "Add to Cart",
  },
  {
    emoji: "🕊️",
    title: "Wings of a Promise",
    description:
      "A small bird keeps a big promise and discovers true courage.",
    price: "$4.00",
    format: "E-book (PDF + ePub)",
    sku: "ebook-bird",
    buttonText: "Buy Now",
  },
];

export default Stories;
