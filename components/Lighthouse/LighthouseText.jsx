'use client';
import React, { useEffect, useRef, useState } from 'react';
import SplitText from '../utils/Split3.min.js';
import gsap from 'gsap';
import cn from 'classnames';
import useOnScreen from '../hooks/useOnScreen';
import "./lighthouse.scss";

function LighthouseText() {
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
    const split = new SplitText("#para2", {
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
        <div className={cn("intro-wrapper-title", {'is-reveal' : reveal})} data-scroll-section>
        <div className="intro-text-title">
          <p ref={ref} id="para2" className={cn({'is-reveal' : reveal})}>
          During my Diploma with Lighthouse Labs, I learned multiple languages and frameworks. Keep scrolling to 
          see some of my projects examples - I also created this portfolio using ReactJS.
          </p>
        </div>
      </div>
    )
}

export default LighthouseText;
