"use client";

import React from "react";

const Videos: React.FC = () => {
  return (
    <section id="videos" className="mx-auto container-lg px-4 py-12">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-3xl text-enkiNavy">
          Early-Access Videos
        </h2>
        <a
          href="#"
          className="text-enkiSunDark font-semibold hover:underline transition-all"
          aria-label="View all videos"
        >
          View all →
        </a>
      </div>

      {/* Description */}
      <p className="mt-3 text-enkiNavy/80 max-w-3xl">
        We transform our stories into short, captivating videos.{" "}
        <strong>New releases</strong> are available here first for a small fee.
        After an early-access period, we upload them to our free{" "}
        <a
          href="#"
          className="underline decoration-enkiSunDark/60 hover:text-enkiSunDark"
        >
          YouTube channel
        </a>
        .
      </p>

      {/* Videos Grid */}
      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <article
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-soft border border-black/5 flex flex-col transition-all hover:shadow-lg hover:scale-[1.02] duration-200"
          >
            {/* Thumbnail Placeholder */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-100 h-48 flex items-center justify-center text-6xl">
              ▶️
            </div>

            {/* Video Info */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-semibold text-lg">{video.title}</h3>
              <p className="text-sm text-enkiNavy/80 mt-1">
                {video.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{video.price}</div>
                  <div className="text-xs text-enkiNavy/60">
                    {video.format}
                  </div>
                </div>
                <button
                  data-sku={video.sku}
                  className="buyBtn px-4 py-2 rounded-lg bg-enkiSunDark text-white text-sm font-semibold hover:bg-enkiSun transition-all"
                >
                  {video.buttonText}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-6 text-xs text-enkiNavy/60 max-w-3xl">
        Note: After purchase, you’ll receive an email with a{" "}
        <strong>signed streaming URL</strong> (expires after 72 hours) and, if
        selected, a <strong>download link</strong> (MP4). Videos later appear on
        our free YouTube channel.
      </div>
    </section>
  );
};

// Dynamic content array
const videos = [
  {
    title: "The Fox & The Starlight — Short Film",
    description:
      "Early access HD video (4–6 min). Watch now on enki-box.com.",
    price: "$1.99",
    format: "Stream instantly",
    sku: "video-fox",
    buttonText: "Unlock",
  },
  {
    title: "The Lion’s Gentle Roar — Short Film",
    description:
      "Exclusive early access (HD). Upload to YouTube after release window.",
    price: "$2.49",
    format: "Stream instantly",
    sku: "video-lion",
    buttonText: "Unlock",
  },
  {
    title: "Wings of a Promise — Short Film",
    description:
      "Early access HD video. Teaches courage & keeping promises.",
    price: "$1.99",
    format: "Stream instantly",
    sku: "video-bird",
    buttonText: "Unlock",
  },
];

export default Videos;
