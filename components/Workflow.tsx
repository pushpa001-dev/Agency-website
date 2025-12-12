"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Workflow = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 70%",
                toggleActions: "play none none reverse",
            }
        });

        // Initial State
        gsap.set(".workflow-element", { opacity: 0, scale: 0.8 });

        // Animation Sequence (Step 1 -> Arrow 1 -> Step 2 -> Arrow 2 -> Step 3 -> Arrow 3 -> Step 4 -> Arrow 4)
        tl.to(".step-1", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" })
            .to(".arrow-1", { opacity: 0.8, scale: 1, duration: 0.3 }, "-=0.2")
            .to(".step-2", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2")
            .to(".arrow-2", { opacity: 0.8, scale: 1, duration: 0.3 }, "-=0.2")
            .to(".step-3", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2")
            .to(".arrow-3", { opacity: 0.8, scale: 1, duration: 0.3 }, "-=0.2")
            .to(".step-4", { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }, "-=0.2")
            .to(".arrow-4", { opacity: 0.8, scale: 1, duration: 0.3 }, "-=0.2");

        // Mobile Stagger
        tl.from(".mobile-step", {
            y: 50,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power2.out",
            clearProps: "all" // Clear prompts to ensure layout remains intact if needed
        }, 0);


    }, { scope: containerRef });

    return (
        <section id='workflow' ref={containerRef} className="bg-black border-b border-gray-800 text-white py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col justify-center items-center overflow-hidden">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bebas-neue font-black mb-20 text-center ">
                How we Deliver in Just 1 Day.
            </h2>

            <div className="relative w-full max-w-5xl h-[600px] hidden md:block">
                {/* Step 1 - Top Center */}
                <div className="workflow-element step-1 absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                    <p className="text-6xl font-black font-bebas-neue tracking-tighter">Step 1</p>
                    <p className="absolute right-[200%] w-100 text-right text-gray-300 text-sm 2xl:text-2xl font-sans top-30">
                        You share your content, branding and referencing
                    </p>
                </div>

                {/* Arrow 1 (Left of Step 1, pointing down-left) */}
                <div className="workflow-element arrow-1 absolute top-[0%] left-[30%] w-24 h-24 rotate-45 rotate-y-180 opacity-0 z-10">
                    <Image src="/arrow.png" alt="arrow" width={100} height={100} className="object-contain" />
                </div>

                {/* Step 2 - Left Center */}
                <div className="workflow-element step-2 absolute top-1/2 left-[15%] -translate-y-1/2 flex flex-col items-center z-20">
                    <span className="text-6xl font-black font-bebas-neue tracking-tighter">Step 2</span>
                    <p className="absolute bottom-[-300%] right-[150%] w-64 text-center mt-4 text-gray-300 text-sm 2xl:text-2xl font-sans">
                        We design the full layout in Figma
                    </p>
                </div>

                {/* Arrow 2 (Below Step 2, pointing down-right) */}
                <div className="workflow-element arrow-2 absolute top-[50%] left-[2%] w-24 h-24 rotate-y-180 rotate-20 opacity-0 z-10">
                    <Image src="/arrow.png" alt="arrow" width={100} height={100} className="object-contain" />
                </div>

                {/* Step 3 - Bottom Center */}
                <div className="workflow-element step-3 absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
                    <span className="text-6xl font-black font-bebas-neue tracking-tighter">Step 3</span>
                    <p className="absolute left-[270%] w-100 text-left text-gray-300 text-sm 2xl:text-2xl font-sans top-[-100]">
                        We build your site using Next.js, Tailwind, GSAP animations.
                    </p>
                </div>

                {/* Arrow 3 (Right of Step 3, pointing up-right) */}
                <div className="workflow-element arrow-3 absolute bottom-[5%] left-[62%] w-24 h-24 rotate-220 -rotate-y-180 opacity-0 z-10">
                    <Image src="/arrow.png" alt="arrow" width={100} height={100} className="object-contain" />
                </div>


                {/* Step 4 - Right Center */}
                <div className="workflow-element step-4 absolute top-1/2 right-[15%] -translate-y-1/2 flex flex-col items-center z-20">
                    <span className="text-6xl font-black font-bebas-neue tracking-tighter">Step 4</span>
                    <p className="absolute bottom-[260%]  left-[150%] w-100 text-center mb-4 text-gray-300 text-sm 2xl:text-2xl font-sans">
                        We deploy through vercel, connect your domain and hand over access.
                    </p>
                </div>

                {/* Arrow 4 (Above Step 4, pointing up-left) */}
                <div className="workflow-element arrow-4 absolute top-[30%] right-[-0%] rotate-200 -rotate-y-180 w-24 h-24 opacity-0 z-10">
                    <Image src="/arrow.png" alt="arrow" width={100} height={100} className="object-contain" />
                </div>

            </div>

            {/* Mobile View */}
            <div className="md:hidden flex flex-col gap-12 relative">
                <div className="mobile-step flex flex-col items-center text-center z-10">
                    <span className="text-5xl font-black font-bebas-neue mb-4">Step 1</span>
                    <p className="text-gray-300 font-sans">You share your content, branding and referencing</p>
                    <div className="w-12 h-12 rotate-90 my-4 opacity-50">
                        <Image src="/arrow.png" alt="arrow" width={50} height={50} className="object-contain" />
                    </div>
                </div>
                <div className="mobile-step flex flex-col items-center text-center z-10">
                    <span className="text-5xl font-black font-bebas-neue mb-4">Step 2</span>
                    <p className="text-gray-300 font-sans">We design the full layout in Figma</p>
                    <div className="w-12 h-12 rotate-90 my-4 opacity-50">
                        <Image src="/arrow.png" alt="arrow" width={50} height={50} className="object-contain" />
                    </div>
                </div>
                <div className="mobile-step flex flex-col items-center text-center z-10">
                    <span className="text-5xl font-black font-bebas-neue mb-4">Step 3</span>
                    <p className="text-gray-300 font-sans">We build your site using Next.js, Tailwind, GSAP animations.</p>
                    <div className="w-12 h-12 rotate-90 my-4 opacity-50">
                        <Image src="/arrow.png" alt="arrow" width={50} height={50} className="object-contain" />
                    </div>
                </div>
                <div className="mobile-step flex flex-col items-center text-center z-10">
                    <span className="text-5xl font-black font-bebas-neue mb-4">Step 4</span>
                    <p className="text-gray-300 font-sans">We deploy through vercel, connect your domain and hand over access.</p>
                </div>
            </div>
        </section>
    );
}

export default Workflow;
