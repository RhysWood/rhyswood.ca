import * as React from "react";
import Image from "next/image";
import Intro from "./vesselparts/Intro";
import "./vessel.scss";

function Vessel() {
  return (
    <section id="vessel">
      <div className="vessel min-h-screen">
        <div className="flex justify-center">
          <Image
            src="/assets/vessellogo.svg"
            alt="Vessel"
            width={400}
            height={400}
            layout="responsive"
            className="filter invert mt-16 max-w-xs md:max-w-sm lg:max-w-md"
          />
        </div>
        <div className="mx-24 my-12 max-w-screen-2xl">
        <Intro />
        </div>
      </div>
    </section>
  );
}

export default Vessel;
