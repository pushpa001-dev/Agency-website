"use client"
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        tl.from(".contact-header", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from(".contact-sub", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.5")
            .from(".contact-link", {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.3")
            .from(".contact-image", {
                scale: 0.95,
                opacity: 0,
                duration: 1.2,
                ease: "power2.out"
            }, "-=0.5");

    }, { scope: containerRef });

    return (
        <section id="contact" ref={containerRef} className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-16">

                {/* Header Section */}
                <div className="flex flex-col 2xl:flex-row items-start md:items-center justify-between gap-8">
                    <h2 className="contact-header text-6xl sm:text-7xl lg:text-8xl font-black font-bebas-neue tracking-widest uppercase ">
                        Contact Me
                    </h2>
                    <div className="contact-sub max-w-md">
                        <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                            Wanna launch your website in a day.
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Send us a message we will respond with plan and timeline.
                        </p>
                    </div>
                </div>

                {/* Links Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
                    <Link href="#" className="contact-link text-xl sm:text-2xl font-medium hover:text-gray-300 ">
                        Instagram
                    </Link>
                    <Link href="#" className="contact-link text-xl sm:text-2xl font-medium hover:text-gray-300 ">
                        Call
                    </Link>
                    <Link href="#" className="contact-link text-xl sm:text-2xl font-medium hover:text-gray-300 ">
                        Email
                    </Link>
                    <Link href="#" className="contact-link text-xl sm:text-2xl font-medium hover:text-gray-300 ">
                        Portfolio
                    </Link>
                </div>

                {/* Image Section */}
                <div className="contact-image relative w-full aspect-21/9 rounded-2xl overflow-hidden">
                    <Image
                        src="/contact.jpg"
                        alt="Handshake"
                        fill
                        className=" hover:scale-110 transition-all duration-300 object-cover"
                    />
                </div>

            </div>
        </section>
    );
}

export default Contact;
