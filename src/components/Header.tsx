'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="mx-auto container-lg px-4 py-4 flex items-center justify-between">
      {/* ===== Logo Section ===== */}
      <Link href="#" className="flex items-center gap-3">
         <Image src={"/images/enkibox-logo.png"} alt='Enki Box Logo' height={100} width={100} />

        {/* <div>
          <div className="font-display text-xl leading-5">
            Enki <span className="text-enkiSunDark">Box</span>
          </div>
          <div className="text-xs text-enkiSunDark/90">Meaning in Motion</div>
        </div> */}
      </Link>

      {/* ===== Desktop Navigation ===== */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="#stories" className="hover:text-enkiSunDark transition-colors">
          Stories
        </Link>
        <Link href="#videos" className="hover:text-enkiSunDark transition-colors">
          Videos
        </Link>
        <Link href="#why" className="hover:text-enkiSunDark transition-colors">
          Why Enki
        </Link>
        <Link href="#payments" className="hover:text-enkiSunDark transition-colors">
          Payments
        </Link>
        <Link href="#newsletter" className="hover:text-enkiSunDark transition-colors">
          Newsletter
        </Link>
      </nav>

      {/* ===== Mobile Menu Button ===== */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-white shadow-soft"
          aria-label="Open menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="#1F2B4B"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* ===== Mobile Menu ===== */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-enkiCream border-t border-enkiNavy/10 shadow-soft md:hidden">
          <nav className="flex flex-col items-center gap-4 py-4 text-enkiNavy">
            <Link href="#stories" onClick={() => setIsMenuOpen(false)} className="hover:text-enkiSunDark">
              Stories
            </Link>
            <Link href="#videos" onClick={() => setIsMenuOpen(false)} className="hover:text-enkiSunDark">
              Videos
            </Link>
            <Link href="#why" onClick={() => setIsMenuOpen(false)} className="hover:text-enkiSunDark">
              Why Enki
            </Link>
            <Link href="#payments" onClick={() => setIsMenuOpen(false)} className="hover:text-enkiSunDark">
              Payments
            </Link>
            <Link href="#newsletter" onClick={() => setIsMenuOpen(false)} className="hover:text-enkiSunDark">
              Newsletter
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
