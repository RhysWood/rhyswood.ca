'use client';
import React, { useRef, useEffect } from "react";

import "./style.scss";

const CustomCursor = () => {
  const mainCursor = useRef(null);
  const secondaryCursor = useRef(null);
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (mainCursor.current && secondaryCursor.current) {
        const { clientX, clientY } = e;

        const mouseX = clientX;
        const mouseY = clientY;

        positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
        positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;

        mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse);

      const {
        mouseX,
        mouseY,
        destinationX,
        destinationY,
        distanceX,
        distanceY,
      } = positionRef.current;

      if (destinationX === 0 && destinationY === 0) {
        positionRef.current.destinationX = mouseX;
        positionRef.current.destinationY = mouseY;
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1;

        if (
          Math.abs(positionRef.current.distanceX) +
            Math.abs(positionRef.current.distanceY) <
          0.1
        ) {
          positionRef.current.destinationX = mouseX;
          positionRef.current.destinationY = mouseY;
        } else {
          positionRef.current.destinationX += distanceX;
          positionRef.current.destinationY += distanceY;
        }
      }

      if (secondaryCursor.current) {
        secondaryCursor.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`;
      }
    };

    followMouse();

    return () => {
      cancelAnimationFrame(positionRef.current.key);
    };
  }, []);

  return (
    <>
      <div className="main-cursor" ref={mainCursor}>
        <div className="main-cursor-background"></div>
      </div>
      <div className="secondary-cursor" ref={secondaryCursor}>
        <div className="cursor-background"></div>
      </div>
    </>
  );
};

export default CustomCursor;