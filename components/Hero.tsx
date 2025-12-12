"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    const heroRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.from(".hero-text-main", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            skewY: 3,
            delay: 1,
        })
            .from(".hero-sub-text", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                delay: 1,
            }, "-=1")
            .from(".hero-btn", {
                y: 20,
                opacity: 0,
                stagger: 0.1,
                duration: 0.8
            }, "-=1")
            .from(".hero-desc", {
                x: 20,
                opacity: 0,
                duration: 0.8
            }, "-=1")
            .from(".hero-image", {
                scale: 0.95,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
                ease: "power2.out"
            }, "-=1");

    }, { scope: heroRef });

    return (
        <section ref={heroRef} className="bg-black w-full h-full 2xl:h-screen text-white py-16 px-4 sm:px-6 lg:px-20 overflow-hidden">
            <div className=" w-full h-full  mx-auto flex flex-col 2xl:flex-row items-center justify-between gap-12">
                {/* Left Content */}
                <div className="flex-1 w-full h-full flex flex-col items-center rounded-3xl p-10 lg:p-5 2xl:p-10 space-y-8 bg-[#111926]">
                    <h1 className="text-6xl text-start sm:text-7xl lg:text-8xl 2xl:text-[14rem] font-bebas-neue font-black tracking-wide leading-none">
                        <span className="hero-text-main inline-block">WEBSITE</span> <br />
                        <span className="hero-text-main inline-block">IN A DAY.</span>
                        <div className="mt-4">
                            <p className="hero-sub-text text-lg text-start sm:text-2xl font-syne-mono font-black tracking-widest uppercase max-w-lg">
                                GET A HIGH CONVERTING <br />
                                WEBSITE IN JUST A DAY.
                            </p>
                        </div>
                    </h1>


                    <div className="flex flex-col xl:flex-row items-center h-full justify-between gap-8 pt-4 w-full">
                        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <Link href="#" className="hero-btn bg-white text-black px-8 py-3 rounded-full font-bold uppercase hover:bg-gray-200 transition-colors text-center inline-block">
                                Book
                            </Link>
                            <Link href="#" className="hero-btn bg-[#1f2937] text-white px-8 py-3 rounded-full font-bold uppercase hover:bg-gray-700 transition-colors text-center border border-white/10 inline-block">
                                View Demo
                            </Link>
                        </div>
                        <div className="text-center md:text-right w-full md:w-auto overflow-hidden">
                            <p className="hero-desc text-xs sm:text-sm 2xl:text-lg text-white/90 font-bebas-neue text-start 2xl:text-end max-w-xs mx-auto md:mx-0 md:ml-auto">
                                WE design biuld and deploy modern
                                websites for startups <br />
                                ,agencies,personal brands- <br />
                                fast,responsive and ready to impress.
                            </p>
                        </div>
                    </div>


                </div>

                {/* Right Content - Images */}
                <div className=" flex-1 flex items-center justify-center flex-col gap-6 p-5 xl:p-10 bg-[#111926] rounded-3xl w-full h-full max-w-xl lg:max-w-none">
                    {/* Top Image (Laptop) */}
                    <div className="hero-image relative group  w-full aspect-4/3 rounded-2xl overflow-hidden ">
                        <Image
                            src="/hero-1.jpg"
                            alt="Laptop displaying website"
                            fill
                            className="object-cover group-hover:scale-105 transition-all duration-300"
                        />
                    </div>

                    {/* Bottom Image (Graph) */}
                    <div className="hero-image relative w-full group  aspect-3/1 rounded-2xl overflow-hidden ">
                        <Image
                            src="/hero-2.jpg"
                            alt="Graph analysis"
                            fill
                            className="object-cover group-hover:scale-105 transition-all duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
