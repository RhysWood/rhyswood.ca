import React, { useEffect, useRef, useState } from 'react';
import SplitText from '../../utils/Split3.min.js';
import gsap from 'gsap';
import cn from 'classnames';
import useOnScreen from '../../hooks/useOnScreen';
import "./iss.scss";
import Fly from "./Fly";
import issTerminal from '../../../imgs/issTerminal.png'

function IssSpotter() {
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
  const split = new SplitText("#para3", {
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
    <div className='outer-wrap'>

      <div className={cn("spotter-wrapper-title", {'is-reveal' : reveal})} data-scroll-container>
        <div className='spotter-moving-title'>
          <Fly />
        </div>
        <div className="spotter-text-title">
          <p ref={ref} className={cn({'is-reveal' : reveal})} data-scroll-section>
          <img src={issTerminal} alt="iss terminal" className="iss-terminal" />
          </p>
        </div>
      </div>

      <div id="para3" className={cn("iss-text", {'is-reveal' : reveal})} data-scroll-section>
          The ISS Spotter is a web application that allows users to track the International Space Station in real time. 
          The ISS Spotter project taught me how to make, manipulate & itegrate API requests. The mini app takes in a users IP address
          using ipify, uses this IP address to find the users location using FreeGeoIP and passes it into the iss url request.
      </div>
    </div>
  );
}



export default IssSpotter;
