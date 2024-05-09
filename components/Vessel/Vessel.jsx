import * as React from "react";
import Image from 'next/image'
import Intro from "./vesselparts/Intro";
import "./vessel.scss";

function Vessel() {
  return (
    <>
      <div className="vessel bg-riceyellow">
        <div className="flex justify-center">
          <Image
            src="/assets/vessellogo.svg"
            width={500}
            height={500}
            alt="Vessel"
            className="filter invert mt-6"
          />
        </div>
        <Intro />
      </div>
    </>
  );
}

export default Vessel;