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
        <div className={cn("intro-wrapper", {'is-reveal' : reveal})} data-scroll-section>
        <div className="intro-text">
          <p ref={ref} id="para" className={cn({'is-reveal' : reveal})}>
          Full-Stack developer based in Vancouver, BC. Passion for creating dynamic, user- friendly websites and applications. 
          Strong background in front-end & back-end technologies. Able to bring ideas to life from start to finish. 
          Take a look at my work and let's connect to discuss how I can help bring your next project to life.
          </p>
        </div>
      </div>
    )
}

export default IntroText;