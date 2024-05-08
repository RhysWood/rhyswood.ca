import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./goat.scss";

export default function Goat() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const sections = gsap.utils.toArray('section')

    sections.forEach( function(section) {
      const inner = section.classList.contains('sectionLeftAndRight') ? section.querySelector('.leftText') : section.querySelector('.section-inner')

      if (!section.classList.contains('horizontalScrolling')) {
        ScrollTrigger.create({
          scroller: '#main-container-2',
          trigger: section,
          start: section.scrollHeight <= window.innerHeight ? 'top top' : 'bottom bottom',
          end: '+=100%',
          pin: inner,
          pinSpacing: false,
          pinType: 'transform'
        });
      } else {
        const scroll = section.querySelector('[data-scroll-in-section]');
        ScrollTrigger.create({
          scroller: '#main-container-2',
          trigger: section,
          start: 'center center',
          end: () => `+=${section.scrollWidth + window.innerHeight}`,
          pin: inner,
          pinSpacing: true,
          pinType: 'transform',
          anticipatePin: 1,
        });

        gsap.to(scroll, {
          x: () => `${-(section.scrollWidth - document.documentElement.clientWidth)}px`,
          ease: 'none',
          scrollTrigger: {
            trigger: scroll,
            scroller: '#main-container-2',
            start: 'center center',
            end: () => `+=${section.scrollWidth}`,
            scrub: true,
          }
        });
      }
    });
// eslint-disable-next-line
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.rightPinImage img',
        scroller: '#main-container-2',
        scrub: true,
        start: '50% 50%',
        endTrigger: '.sectionLeftAndRight .section-inner',
        end: 'bottom bottom',
        anticipatePin: 1,
        pin: true,
        pinSpacing: false,
        pinType: 'transform'
      }
    });

    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <div id="main-container-2" className="smooth-scroll-2" data-scroll-section>
        
  
        <section className="blue sectionLeftAndRight min-h-100" data-scroll-section>
          <div className="section-inner">
            
            <div className="leftText">
                  <p>START</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>LEFT TEXT</p>
                  <p>END</p>
          </div>
            
            <div className="rightPinImage">
              <img src="https://picsum.photos/id/237/200/300" alt="" />
            </div>
            
          </div>
        </section>
        
        <section className="green min-h-50" data-scroll-section>
          <div className="section-inner">Text</div>
        </section>
        
        <section className="purple min-h-100" data-scroll-section>
          <div className="section-inner">Text</div>
        </section>
        
        <section className="horizontalScrolling pink" data-scroll-section>
          <div className="section-inner">
            <div data-scroll-in-section>
              <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
                      <div className="item"></div>
            </div>
          </div>
        </section>
        
        <section className="blue min-h-100 afterHorizontal" data-scroll-section>
          <div className="section-inner">Text</div>
        </section>

        <section className="green min-h-100" data-scroll-section>
          <div className="section-inner">Text</div>
        </section>
        
      </div>

    </>
  );
}

