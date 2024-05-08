import React from "react";
import Title from "./Title.jsx";
import IssSpotter from "./IssSpotter/IssSpotter";
// import Tinyapp from "./tinyApp/Tinyapp.jsx";
import "./lighthouse.scss";

function Lighthouse() {
  return (
    <>
      <div className="lighthouse-container">
        <Title />
        <IssSpotter />
        {/* <Tinyapp /> */}
      </div>
    </>
  );
}

export default Lighthouse;
