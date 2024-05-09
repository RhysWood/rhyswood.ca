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
        <div className={cn("flex ml-[40vh] mr-[5vh]", {'is-reveal' : reveal})} data-scroll-section>
        <div className="intro-text">
          <p ref={ref} id="para" className={cn({'is-reveal' : reveal})}>
          Vancouver based <span className='text-ricegreen'>Full-Stack Developer</span> with an expertise in crafting dynamic and <span className='text-ricegreen'>intuitive web applications.</span> Proficiency in front-end and back-end technologies, with a focus on <span className='text-ricegreen'>seamless REST API integration.</span>
          </p>
        </div>
      </div>
    )
}

export default IntroText;