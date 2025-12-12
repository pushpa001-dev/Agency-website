"use client";
import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Service = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 80%", // Start animation when top of section hits 80% viewport height
                toggleActions: "play ",
            }
        });

        tl.from(".service-title", {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        })
            .from("#service-card-1", {
                y: 50,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out"
            },);

    }, { scope: containerRef });

    return (
        <section id='service' ref={containerRef} className="bg-black border-t border-b border-gray-800 text-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="service-title text-4xl sm:text-5xl lg:text-6xl 2xl:text-[7rem] font-bebas-neue font-black mb-12 ">
                    Everything you Need in One Page.
                </h2>

                <div className="grid grid-cols-1  md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div id='service-card-1' className="service-card bg-[#0D1117] group  rounded-2xl p-6 flex flex-col h-full ">
                        <div className="relative group-hover:scale-105 transition-all duration-300 w-full aspect-video rounded-lg overflow-hidden mb-6">
                            <Image
                                src="/service-1.jpg"
                                alt="Laptop usage"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bebas-neue tracking-wider  mb-4">Custom Landing Page Design</h3>
                        <div className=""></div>
                        <p className="text-gray-400 text-sm mt-8 text-right">
                            Tailor made layout in Figma, aligned with your brand, content and audiences.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div id='service-card-1' className="service-card bg-[#0D1117] group  rounded-2xl p-6 flex flex-col h-full ">
                        <div className="relative group-hover:scale-105 transition-all duration-300 w-full aspect-video rounded-lg overflow-hidden mb-6">
                            <Image
                                src="/service-2.jpg"
                                alt="Code screen"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bebas-neue tracking-wider  mb-4">Blazing Fast Development</h3>
                        <div className=""></div>
                        <p className="text-gray-400 text-sm mt-8 text-right">
                            Built with Next.Js and Tailwind for speed , SEO and responsiveness .
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div id='service-card-1' className="service-card bg-[#0D1117] group     rounded-2xl p-6 flex flex-col h-full ">
                        <div className="relative group-hover:scale-105 transition-all duration-300 w-full aspect-video rounded-lg overflow-hidden mb-6">
                            <Image
                                src="/service-3.jpg"
                                alt="Launch blocks"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <h3 className="text-2xl font-bebas-neue tracking-wider mb-4">Launch & Support</h3>
                        <div className=""></div>
                        <p className="text-gray-400 text-sm mt-8 text-right">
                            We deploy our site on vercel and show how to manage it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
