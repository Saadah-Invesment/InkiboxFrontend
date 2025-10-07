"use client";

import { useState } from "react";
import Image from "next/image";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [checkoutItem, setCheckoutItem] = useState<string | null>(null);
  const [accessType, setAccessType] = useState<"stream" | "download">("stream");

  // Example Stripe/PayPal links (replace with real ones)
  const stripeLinks: Record<string, Record<string, string>> = {
    stream: {
      "video-fox": "https://buy.stripe.com/test_fox_stream",
      "video-lion": "https://buy.stripe.com/test_lion_stream",
      "video-bird": "https://buy.stripe.com/test_bird_stream",
    },
    download: {
      "video-fox": "https://buy.stripe.com/test_fox_dl",
      "video-lion": "https://buy.stripe.com/test_lion_dl",
      "video-bird": "https://buy.stripe.com/test_bird_dl",
    },
  };

  const items: Record<string, string> = {
    "ebook-fox": "The Fox & The Starlight (E-book) — $4.00",
    "print-lion": "The Lion’s Gentle Roar (Paperback) — $9.99",
    "ebook-bird": "Wings of a Promise (E-book) — $4.00",
    "video-fox": "The Fox & The Starlight — Early-Access Video — $1.99",
    "video-lion": "The Lion’s Gentle Roar — Early-Access Video — $2.49",
    "video-bird": "Wings of a Promise — Early-Access Video — $1.99",
  };

  const handleBuy = (sku: string) => {
    setCheckoutItem(items[sku]);
    setAccessType("stream");
    setModalOpen(true);
    (window as any).currentSKU = sku;
  };



  return (
    <main className="bg-enkiCream text-enkiNavy font-sans">
      {/* ========== Top Bar ========== */}
      <div className="w-full bg-white/70 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-[1200px] px-4 py-2 text-sm flex items-center justify-between">
          <p>Worldwide shipping • Instant e-book download</p>
          <div className="flex items-center gap-3 opacity-80">
            <span className="hidden sm:inline">Secure checkout:</span>
            {[
              "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
              "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
              "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg",
              "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
            ].map((src, i) => (
              <Image key={i} alt="logo" src={src} width={40} height={20} />
            ))}
          </div>
        </div>
      </div>

      {/* ========== Header ========== */}
      <header className="mx-auto max-w-[1200px] px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          {/* Inline SVG logo */}
          <svg
            width="44"
            height="44"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <rect x="10" y="26" width="44" height="28" rx="4" fill="#1F2B4B" />
            <path d="M10 26l12-10 10 10M54 26l-12-10-10 10" fill="#1F2B4B" />
            <circle cx="32" cy="18" r="8" fill="#F6B247" />
            <path
              d="M21 26c3-6 11-6 14 0M29 26c3-6 11-6 14 0"
              fill="none"
              stroke="#F6B247"
              strokeWidth="2"
            />
            <path d="M49 11l5 3-3 5" fill="#E67E22" />
            <g fill="#fff">
              <rect x="30.5" y="26" width="3" height="28" />
              <rect x="10" y="39" width="44" height="3" />
            </g>
          </svg>
          <div>
            <div className="font-display text-xl leading-5">
              Enki <span className="text-enkiSunDark">Box</span>
            </div>
            <div className="text-xs text-enkiSunDark/90">Meaning in Motion</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {["Stories", "Videos", "Why Enki", "Payments", "Newsletter"].map(
            (name) => (
              <a
                key={name}
                href={`#${name.toLowerCase().replace(" ", "")}`}
                className="hover:text-enkiSunDark"
              >
                {name}
              </a>
            )
          )}
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg bg-white shadow-soft"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1F2B4B"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4">
          <div className="bg-white rounded-2xl shadow-soft p-4 space-y-2">
            {["Stories", "Videos", "Why Enki", "Payments", "Newsletter"].map(
              (name) => (
                <a
                  key={name}
                  href={`#${name.toLowerCase().replace(" ", "")}`}
                  className="block py-2"
                >
                  {name}
                </a>
              )
            )}
          </div>
        </div>
      )}

      {/* ========== HERO ========== */}
      <section className="mx-auto max-w-[1200px] px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-5xl leading-tight">
            Stories that plant <span className="text-enkiSunDark">wisdom</span>{" "}
            in growing hearts
          </h1>
          <p className="mt-5 text-lg text-enkiNavy/80 max-w-prose">
            Beautifully illustrated children’s books inspired by classic fables
            and reimagined for today. Spark empathy, courage, and curiosity in
            readers aged 6 – 10.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href="#stories"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-enkiSunDark text-white font-semibold shadow-soft hover:opacity-95"
            >
              Browse Books
            </a>
            <a
              href="#why"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-enkiNavy font-semibold shadow-soft hover:bg-enkiCream"
            >
              Why Enki Box
            </a>
          </div>
        </div>
        <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200 shadow-soft flex items-center justify-center p-8">
          <div className="text-center">
            <div className="text-8xl">📚</div>
            <p className="mt-3 text-enkiNavy/70">
              Preview pages & purchase securely
            </p>
          </div>
        </div>
      </section>

      {/* ========== WHY ENKI ========== */}
      <section id="why" className="mx-auto max-w-[1200px] px-4 py-12">
        <h2 className="font-display text-3xl">Why families choose Enki Box</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: "✨",
              title: "Modern tales, timeless values",
              text: "Inspired by classic wisdom like Kalila & Dimna, crafted for today’s kids with heart and humor.",
            },
            {
              icon: "🎨",
              title: "Illustrations kids love",
              text: "Vivid characters and scenes that make reading a delight at bedtime and beyond.",
            },
            {
              icon: "🔒",
              title: "Secure & global",
              text: "Instant e-book delivery and worldwide shipping. Payments are encrypted and trusted.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-soft border border-black/5"
            >
              <div className="text-3xl">{f.icon}</div>
              <h3 className="mt-3 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-enkiNavy/80">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== STORIES ========== */}
      <section id="stories" className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl">Featured Stories</h2>
          <a href="#" className="text-enkiSunDark font-semibold">
            View all →
          </a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              emoji: "🦊",
              title: "The Fox & The Starlight",
              desc: "A clever fox learns that honesty outshines any shortcut.",
              price: "$4.00",
              type: "E-book (PDF + ePub)",
              sku: "ebook-fox",
              button: "Buy Now",
            },
            {
              emoji: "🦁",
              title: "The Lion’s Gentle Roar",
              desc: "Strength meets kindness when a prince of the jungle finds a new friend.",
              price: "$9.99",
              type: "Paperback (Ships worldwide)",
              sku: "print-lion",
              button: "Add to Cart",
            },
            {
              emoji: "🕊️",
              title: "Wings of a Promise",
              desc: "A small bird keeps a big promise and discovers true courage.",
              price: "$4.00",
              type: "E-book (PDF + ePub)",
              sku: "ebook-bird",
              button: "Buy Now",
            },
          ].map((b, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-soft border border-black/5 flex flex-col"
            >
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 h-48 flex items-center justify-center text-6xl">
                {b.emoji}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-sm text-enkiNavy/80 mt-1">{b.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{b.price}</div>
                    <div className="text-xs text-enkiNavy/60">{b.type}</div>
                  </div>
                  <button
                    onClick={() => handleBuy(b.sku)}
                    className="px-4 py-2 rounded-lg bg-enkiSunDark text-white text-sm font-semibold"
                  >
                    {b.button}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========== VIDEOS ========== */}
      <section id="videos" className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-display text-3xl">Early-Access Videos</h2>
          <a href="#" className="text-enkiSunDark font-semibold">
            View all →
          </a>
        </div>
        <p className="mt-3 text-enkiNavy/80 max-w-3xl">
          We transform our stories into short, captivating videos. New releases are available here first for a small fee.
        </p>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              sku: "video-fox",
              title: "The Fox & The Starlight — Short Film",
              price: "$1.99",
            },
            {
              sku: "video-lion",
              title: "The Lion’s Gentle Roar — Short Film",
              price: "$2.49",
            },
            {
              sku: "video-bird",
              title: "Wings of a Promise — Short Film",
              price: "$1.99",
            },
          ].map((v, i) => (
            <article
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-soft border border-black/5 flex flex-col"
            >
              <div className="bg-gradient-to-br from-amber-50 to-orange-100 h-48 flex items-center justify-center text-6xl">
                ▶️
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-semibold">{v.title}</h3>
                <p className="text-sm text-enkiNavy/80 mt-1">
                  Early access HD video (4–6 min).
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{v.price}</div>
                    <div className="text-xs text-enkiNavy/60">
                      Stream instantly
                    </div>
                  </div>
                  <button
                    onClick={() => handleBuy(v.sku)}
                    className="px-4 py-2 rounded-lg bg-enkiSunDark text-white text-sm font-semibold"
                  >
                    Unlock
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ========== PAYMENTS ========== */}
      <section id="payments" className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="bg-white rounded-3xl p-8 shadow-soft border border-black/5">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl">Safe, simple checkout</h2>
              <p className="mt-3 text-enkiNavy/80">
                Pay securely with major cards, PayPal, or local methods.
                E-books arrive instantly in your inbox. Print editions ship globally with tracking.
              </p>
            </div>
            <div className="bg-gradient-to-br from-white to-amber-50 border border-orange-200 rounded-2xl p-6">
              <div className="text-sm text-enkiNavy/80">Payment methods</div>
              <div className="mt-3 flex items-center gap-4 flex-wrap">
                {[
                  "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",
                  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
                  "https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo_%282018%29.svg",
                  "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg",
                ].map((src, i) => (
                  <Image key={i} alt="logo" src={src} width={50} height={25} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== NEWSLETTER ========== */}
      <section id="newsletter" className="mx-auto max-w-[1200px] px-4 py-12">
        <div className="bg-enkiNavy text-white rounded-3xl p-8 shadow-soft">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl">Join the Enki family</h2>
              <p className="mt-2 text-white/80">
                Get new releases, free printables, and special offers.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! You're subscribed.");
              }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-xl text-enkiNavy focus:outline-none"
              />
              <button className="px-6 py-3 rounded-xl bg-enkiSun text-enkiNavy font-semibold hover:opacity-90">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="mt-8 border-t border-black/10">
        <div className="mx-auto max-w-[1200px] px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div>
            <div className="font-display text-xl">
              Enki <span className="text-enkiSunDark">Box</span>
            </div>
            <p className="mt-2 text-enkiNavy/70 max-w-xs">
              Meaning in Motion — stories that teach, inspire, and stay with
              children forever.
            </p>
          </div>
          <div>
            <div className="font-semibold">Explore</div>
            <ul className="mt-2 space-y-2">
              <li><a href="#stories">Books</a></li>
              <li><a href="#videos">Videos</a></li>
              <li><a href="#why">Why Enki</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Support</div>
            <ul className="mt-2 space-y-2">
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold">Contact</div>
            <ul className="mt-2 space-y-2">
              <li>hello@enki-box.com</li>
              <li>Abu Dhabi, UAE</li>
              <li className="flex gap-3 pt-1">
                <a href="#">📸</a>
                <a href="#">▶️</a>
                <a href="#">🎵</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center text-xs text-enkiNavy/60 pb-8">
          © {new Date().getFullYear()} Enki Box. All rights reserved.
        </div>
      </footer>

      {/* ========== CHECKOUT MODAL ========== */}
      {modalOpen && (
        <div
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
          className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
        >
          <div className="bg-white w-[92vw] max-w-md rounded-2xl p-6 shadow-soft">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-lg">Checkout</h3>
              <button onClick={() => setModalOpen(false)} className="p-2">
                ✖️
              </button>
            </div>
            <p className="mt-2 text-sm text-enkiNavy/80">
              You are purchasing:{" "}
              <span className="font-medium">{checkoutItem}</span>
            </p>

            <fieldset className="mt-4">
              <legend className="text-sm font-semibold">Choose access type</legend>
              <div className="mt-2 grid grid-cols-1 gap-2 text-sm">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="accessType"
                    value="stream"
                    checked={accessType === "stream"}
                    onChange={() => setAccessType("stream")}
                    className="accent-enkiSunDark"
                  />
                  <span>Stream (72-hour signed URL)</span>
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="accessType"
                    value="download"
                    checked={accessType === "download"}
                    onChange={() => setAccessType("download")}
                    className="accent-enkiSunDark"
                  />
                  <span>Download (MP4 file)</span>
                </label>
              </div>
            </fieldset>

            <a
              href={""}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center px-5 py-3 rounded-xl bg-enkiSunDark text-white font-semibold"
            >
              Proceed to Secure Payment
            </a>
          </div>
        </div>
      )}
    </main>
  );
}