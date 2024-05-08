import React from "react";
import "./tinyapp.scss";

export default function Tinyapp() {
  return (
    <div className="split-screen" data-scroll-section>
      <div className="split-screen__top-left">
        <h6> Server Side (Node.js & Express)</h6>
        <h1>TinyApp</h1>
      </div>
      <div className="split-screen__bottom-right">
        <h6>jQuery and AJAX</h6>
        <h1>Tweeter</h1>
      </div>
    </div>
  );
}
