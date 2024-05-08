import React, { useState, useEffect } from 'react';

export const HighlightOnScroll = ({ text }) => {
  const [highlightStart, setHighlightStart] = useState(0);
  const [highlightEnd, setHighlightEnd] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const textNode = document.getElementById("text");
      if(textNode){
        const textTop = textNode.getBoundingClientRect().top;
        const textBottom = textNode.getBoundingClientRect().bottom;
        setHighlightStart(Math.max(scrollTop - textTop, 0));
        setHighlightEnd(Math.min(scrollTop - textTop + window.innerHeight, textBottom - textTop));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="text" style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          top: `${highlightStart}px`,
          height: `${highlightEnd-highlightStart}px`,
          left: 0,
          right: 0,
          background: "yellow",
          zIndex: 1,
        }}
      ></div>
      {text}
    </div>
  );
};
