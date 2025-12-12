"use client";
import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Loader = ({ onComplete }: { onComplete: () => void }) => {
    const loaderRef = useRef(null);
    const [count, setCount] = useState(0);

    useGSAP(() => {
        const tl = gsap.timeline({
            onComplete: () => {
                onComplete();
            }
        });

        const counterObj = { value: 0 };

        tl.to(counterObj, {
            value: 100,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: () => {
                setCount(Math.round(counterObj.value));
            }
        })
            .to(".loader-text", {
                opacity: 0,
                duration: 0.5,
                y: -50,
                ease: "power2.in"
            })
            .to(loaderRef.current, {
                yPercent: -100,
                duration: 1,
                ease: "power4.inOut"
            });

    }, { scope: loaderRef });

    return (
        <div ref={loaderRef} className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center text-white">
            <div className="loader-text flex flex-col items-center">
                <h1 className="text-4xl sm:text-6xl font-bebas-neue font-black tracking-widest mb-4">
                    ONE DAY STUDIO
                </h1>
                <p className="font-syne-mono text-xl sm:text-2xl">
                    {count}%
                </p>
            </div>
        </div>
    );
};

export default Loader;
