'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="mx-auto container-lg px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
      {/* ===== Left Content ===== */}
      <div>
        <h1 className="font-display text-4xl md:text-5xl leading-tight">
          Stories that plant <span className="text-enkiSunDark">wisdom</span> in growing hearts
        </h1>

        <p className="mt-5 text-lg text-enkiNavy/80 max-w-prose">
          Beautifully illustrated children’s books inspired by classic fables and reimagined for today.
          Spark empathy, courage, and curiosity in readers aged 6–10.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-col sm:flex-row gap-3">
          <Link
            href="#stories"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-enkiSunDark text-white font-semibold shadow-soft hover:opacity-95 transition"
          >
            Browse Books
          </Link>
          <Link
            href="#why"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-enkiNavy font-semibold shadow-soft hover:bg-enkiCream transition"
          >
            Why Enki Box
          </Link>
        </div>

        {/* Rating Text */}
        <div className="mt-6 flex items-center gap-3 text-sm text-enkiNavy/70">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 2l3 7h7l-5.5 4.2 2 7L12 16l-6.5 4.2 2-7L2 9h7l3-7z"
              stroke="#E67E22"
              strokeWidth="1.5"
            />
          </svg>
          <span>4.8/5 from early readers • Instant e-book download</span>
        </div>
      </div>

      {/* ===== Right Illustration Box ===== */}
      <div className="relative">
        <div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-orange-100 to-amber-100 border border-orange-200 shadow-soft flex items-center justify-center p-8">
          <div className="text-center">
            {/* <div className="text-8xl">📚</div>
            <p className="mt-3 text-enkiNavy/70">Preview pages & purchase securely</p> */}
            <Image src={"/images/enkibox-logo.png"} alt='Enki Box Logo'  height={400} width={400} className=' rounded-lg'/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
