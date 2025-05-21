"use client";
import React, { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import SplitText from "../utils/Split3.min.js";

function Welcome() {
    useEffect(() => {
        const split = new SplitText(".intromove", {
            type: "lines",
            linesClass: "lineChildren",
        });

        const splitParent = new SplitText(".intromove", {
            type: "lines",
            linesClass: "lineParent",
        });

        gsap.to(split.lines, {
            duration: 1,
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: "power2",
        });
    }, []);

    return (
        <div
            className="relative min-h-screen flex flex-col justify-between items-center lg:items-stretch bg-black"
            style={{ paddingTop: "clamp(4rem, 10vh, 8rem)" }} // Dynamic spacing for the nav
        >
            {/* Top section */}
            <div className="text-center lg:text-right mt-8 lg:mt-0 mx-4 intromove">
                <h1
                    className="text-white font-NeueMontrealBook transition-colors duration-300 hover:text-riceyellow"
                    style={{
                        fontSize: "clamp(4rem, 5vw, 7rem)",
                        lineHeight: "1.1",
                    }}
                >
                    Full-Stack Developer
                </h1>
            </div>

            {/* Bottom section */}
            <div className="text-center lg:text-left mb-16 lg:mt-0 mx-4 intromove">
                <h1
                    className="text-white font-NeueMontrealBook leading-tight transition-colors duration-300 hover:text-ricegreen"
                    style={{
                        fontSize: "clamp(4rem, 6vw, 8rem)",
                        lineHeight: "1.1",
                    }}
                >
                    Rhys Wood
                </h1>
            </div>

            {/* Arrow animation */}
            <div className="absolute inset-0 flex items-center justify-center">
                <DotLottieReact
                    src="/assets/lottie/arrow.json"
                    loop
                    autoplay
                    style={{
                        width: "clamp(250px, 15vw, 220px)",
                        height: "clamp(250px, 15vw, 220px)",
                        filter: "invert(100%)",
                    }}
                />
            </div>
        </div>
    );
}

export default Welcome;
