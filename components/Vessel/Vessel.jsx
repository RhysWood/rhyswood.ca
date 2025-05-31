import * as React from "react";
import Image from "next/image";
import Intro from "./vesselparts/Intro";
import "./vessel.scss";

function Vessel() {
  return (
    <section id="vessel" className="bg-white">
      <div className="vessel min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-8 md:py-16">
          <Image
            src="/assets/vessellogo.svg"
            alt="Vessel"
            width={400}
            height={400}
            className="filter invert w-48 md:w-64 lg:w-96 transition-transform hover:scale-105"
            priority
          />
        </div>
        <Intro />
      </div>
    </section>
  );
}

export default Vessel;
