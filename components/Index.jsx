import React, { useState, useRef, useEffect } from "react";
import "../styles/index.scss";
import Lighthouse from "./Lighthouse/Lighthouse";
import IntroText from "./Welcome/IntroText";
import Gallery from "./Gallery/Gallery";
import Vessel from "./Vessel/Vessel";
import Contact from "./Contact/Contact";
import Welcome from "./Welcome/Welcome";
import CustomCursor from "./CustomCursor/CustomCursor";
import NavBar from "./Navigation/navbar";
import Footer from "./Navigation/Footer";
import { ReactLenis } from 'lenis/react';
import { gsap } from 'gsap';

// Register GSAP plugin
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [preloader, setPreloader] = useState(true);

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;

    function update(time) {
      lenis?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  const [timer, setTimer] = useState(2);
  const timeoutId = useRef(null);

  const clear = () => {
    clearTimeout(timeoutId.current);
    setPreloader(false);
  };

  useEffect(() => {
    if (timer > 0) {
      timeoutId.current = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    } else {
      clear();
    }
  }, [timer]);

  useEffect(() => {
    if (!preloader) {
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    }
  }, [preloader]);

  return (
    <ReactLenis ref={lenisRef} autoRaf={false}>
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute" ref={timeoutId}>
          <h1>RW</h1>
        </div>
      ) : (
        <>
          <div
            className="main-container"
            id="main-container"
            data-scroll-container
          >
            <div className={`fade-in-all ${isVisible ? "show" : ""}`}>
              <NavBar />
              <div className="section">
                <Welcome />
              </div>

              <div className="section">
                <IntroText />
              </div>

              <div className="section">
                <Lighthouse />
              </div>

              <div id="gallery">
                <Gallery />
              </div>

              <div id="vessel" className="section">
                <Vessel />
              </div>

              <div id="contact" className="section">
                <Contact />
              </div>
            </div>
            <Footer />
          </div>
        </>
      )}
    </ReactLenis>
  );
};

export default Home;
