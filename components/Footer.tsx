import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8">

                {/* Left Content */}
                <div className="flex flex-col gap-2">
                    <p className="text-sm font-medium">@2025 Launched to support people</p>
                    <p className="text-gray-400 text-sm">Built with Next.js , Tailwind , GSAP</p>
                </div>

                {/* Right Content - Social Icons */}
                <div className="flex items-center gap-6">
                    {/* WhatsApp */}
                    <Link href="#" className="hover:text-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                        </svg>
                    </Link>

                    {/* Instagram */}
                    <Link href="#" className="hover:text-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                    </Link>

                    {/* LinkedIn */}
                    <Link href="#" className="hover:text-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                        </svg>
                    </Link>

                    {/* GitHub */}
                    <Link href="#" className="hover:text-gray-300 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0 3 1.5l2.5 2.5c3.5 0 7 .5 9 1 2 .5 2 2 4.9 0 7.4-1.35.5-2.75.75-4.25.75C17.75 22 17.5 22 15 22Z" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <p className="text-gray-400 text-sm">MADE BY TPA-INFERA</p>
            </div>
        </footer>
    );
}

export default Footer;
