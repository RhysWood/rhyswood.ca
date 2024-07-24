'use client';
import React, { useEffect, useRef, useState } from 'react';
import SplitText from '../../utils/Split3.min.js';
import gsap from 'gsap';
import cn from 'classnames';
import useOnScreen from '../../hooks/useOnScreen';
import '../vessel.scss';

function Intro() {
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
      const split = new SplitText("#para1", {
        type: "lines"
      });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: 'power2',
      });
    }
  }, [reveal]);

  return (
    <div className={cn("w-1/4 mt-8 ml-24 mr-6", { 'is-reveal': reveal })} data-scroll-section>
      <div className="intro-text">
        <ul ref={ref} id="para1" className={cn({ 'is-reveal text-xl mt-6 font-NeueMontrealBook text-ricegreen': reveal })}>
          <li>
            Developed automation scripts and processes for order processing, enabling sales representatives to focus on customer acquisition and sales growth.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Intro;
