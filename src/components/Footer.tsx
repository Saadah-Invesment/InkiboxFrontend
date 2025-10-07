"use client";

import React from "react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="mt-8 border-t border-black/10">
            <div className="mx-auto container-lg px-4 py-10 grid md:grid-cols-4 gap-8 text-sm">
                {/* Brand */}
                <div>
                    <div className="font-display text-xl">
                        Enki <span className="text-enkiSunDark">Box</span>
                    </div>
                    <p className="mt-2 text-enkiNavy/70 max-w-xs">
                        Meaning in Motion — stories that teach, inspire, and stay with
                        children forever.
                    </p>
                </div>

                {/* Explore Links */}
                <div>
                    <div className="font-semibold">Explore</div>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="#stories" className="hover:text-enkiSunDark">
                                Books
                            </a>
                        </li>
                        <li>
                            <a href="#videos" className="hover:text-enkiSunDark">
                                Videos
                            </a>
                        </li>
                        <li>
                            <a href="#why" className="hover:text-enkiSunDark">
                                Why Enki
                            </a>
                        </li>
                        <li>
                            <a href="#newsletter" className="hover:text-enkiSunDark">
                                Newsletter
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <div className="font-semibold">Support</div>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="#" className="hover:text-enkiSunDark">
                                Shipping & Returns
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-enkiSunDark">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-enkiSunDark">
                                Terms of Service
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <div className="font-semibold">Contact</div>
                    <ul className="mt-2 space-y-2">
                        <li>
                            <a href="mailto:hello@enki-box.com" className="hover:text-enkiSunDark">
                                hello@enki-box.com
                            </a>
                        </li>
                        <li>Abu Dhabi, UAE</li>
                        <li className="flex gap-3 pt-1">
                            <a href="#" aria-label="Instagram" className="hover:text-enkiSunDark">
                                📸
                            </a>
                            <a href="#" aria-label="YouTube" className="hover:text-enkiSunDark">
                                ▶️
                            </a>
                            <a href="#" aria-label="TikTok" className="hover:text-enkiSunDark">
                                🎵
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-xs text-enkiNavy/60 pb-8">
                © {currentYear} Enki Box. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
