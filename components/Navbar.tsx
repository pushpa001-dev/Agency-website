"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Scale X animation for the navbar container
        tl.from(navRef.current, {
            scaleX: 0,
            duration: 1.2,
            delay: 1,
            ease: "power3.out",
            transformOrigin: "center center"
        });

        // Stagger animation for the links and logo
        if (linksRef.current) {
            tl.from(Array.from(linksRef.current.children), {
                y: -20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.5,
                ease: "power2.out",
            }, "-=0.6");
        }

    }, { scope: navRef });

    return (
        <nav className="sticky top-4 left-0 right-0 z-50 flex justify-center w-full px-4 font-sans">
            <div
                ref={navRef}
                className="w-full max-w-7xl rounded-full bg-[#16202f] text-white overflow-hidden shadow-2xl"
            >
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20" ref={linksRef}>
                        {/* Logo */}
                        <div className="shrink-0">
                            <Link href="/" className="font-bold tracking-widest uppercase font-bebas-neue text-2xl">
                                OneDayStudio
                            </Link>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="#service" className="font-medium hover:text-gray-300 transition-colors uppercase text-sm tracking-widest">
                                Services
                            </Link>
                            <Link href="#workflow" className="font-medium hover:text-gray-300 transition-colors uppercase text-sm tracking-widest">
                                Working
                            </Link>
                            <Link href="#contact" className="font-medium hover:text-gray-300 transition-colors uppercase text-sm tracking-widest">
                                Contact Me
                            </Link>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden md:block">
                            <Link href="#" className="bg-white text-black px-6 py-2.5 rounded-full font-bold uppercase text-sm hover:bg-gray-200 transition-colors tracking-wide">
                                Get Website
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                ) : (
                                    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-[#16202f] border-t border-gray-700">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 uppercase tracking-widest">
                                Services
                            </Link>
                            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 uppercase tracking-widest">
                                Working
                            </Link>
                            <Link href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 uppercase tracking-widest">
                                Contact Me
                            </Link>
                            <Link href="#" className="block px-3 py-2 rounded-md text-base font-bold bg-white text-black mt-4 text-center uppercase tracking-widest">
                                Get Website
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
