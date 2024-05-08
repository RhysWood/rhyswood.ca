'use client';
import React, { useEffect, useRef, useState } from 'react';
import SplitText from '../utils/Split3.min.js';
import gsap from 'gsap';
import cn from 'classnames';
import useOnScreen from '../hooks/useOnScreen';
import './welcome.scss';

function IntroText() {
    const ref = useRef(null);
    const [reveal, setReveal] = useState(false);
    const onScreen = useOnScreen(ref);

    useEffect(() => {
        if(onScreen) {
            setReveal(onScreen);
        }
    }, [onScreen]);

  useEffect(() => {
    if(reveal) {
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

    return(
        <div className={cn("flex w-1/2 grow ml-[40vh] mr-28", {'is-reveal' : reveal})} data-scroll-section>
        <div className="intro-text">
          <p ref={ref} id="para" className={cn({'is-reveal' : reveal})}>
          <span className='text-ricegreen inline'>Experienced Full-Stack Developer</span> based in Vancouver, BC, specializing in creating dynamic and <span className='text-ricegreen inline'>user-friendly sites & web apps</span>. With a strong background in front-end & back-end technologies, including automation scripting and REST API integration, I bring ideas to life from inception to implementation.
          </p>
        </div>
      </div>
    )
}

export default IntroText;