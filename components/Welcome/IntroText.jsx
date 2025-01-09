'use client';
import React, {useEffect, useRef, useState} from 'react';
import SplitText from '../utils/Split3.min.js';
import gsap from 'gsap';
import cn from 'classnames';
import useOnScreen from '../hooks/useOnScreen';
import './welcome.scss';
import Image from "next/image";

function IntroText() {
    const ref = useRef(null);
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if (onScreen) {
            setReveal(onScreen);
        }
    }, [onScreen]);

    useEffect(() => {
        if (reveal) {
            const split = new SplitText("#para", {
                type: "lines"
            });

            gsap.to(split.lines, {
                duration: 1,
                y: -20,
                opacity: 1,
                stagger: 0.1,
                ease: 'power2',
            })
        }
    }, [reveal]);

    return (
        <div className="intro-wrapper">
            <div className={cn("flex lg:mx-44 lg:mt-64 mt-32 lg:w-7/12", { 'is-reveal': reveal })}>
                <div className="intro-text font-thin">
                    <p ref={ref} id="para" className={cn("", {'is-reveal font-thin': reveal})}>
                        Hi, I'm Rhys - a <span className='text-ricegreen'>Full-Stack Developer. </span>I create seamless
                        web apps, from intuitive front-end designs to <span className='text-ricegreen'>scalable back-end solutions. </span>
                        I'm passionate about turning ideas into efficient, <span className='text-ricegreen'>user-friendly experiences.</span>
                    </p>
                </div>
            </div>

            <div className="flex justify-center flex-col-reverse lg:flex-row lg:space-x-10 items-center">
                <div className="flex justify-center lg:justify-start">
                    <Image
                        src="/assets/imgs/Rhys_Wood.jpg"
                        alt="Rhys"
                        width={300}
                        height={300}
                        className="max-w-full lg:max-w-[500px] h-auto rounded-lg shadow-lg"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default IntroText;