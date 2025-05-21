import React from "react";
import TinyApp from "../lhouseproj/TinyApp";
import Tweeter from "../lhouseproj/Tweeter";
import LightBnb from "../lhouseproj/LightBnb";
import Proboneo from "../lhouseproj/Proboneo";

const Projects = () => {
  return (
    <section className="bg-riceorange">
      <div>
        <div className="mb-20 text-center">
          <h1 className="text-3xl mb-5 sm:text-4xl lg:text-3xl font-NeueMontrealBold text-gray-800 pt-20">
            <a href="https://gitfront.io/r/user-1032879/3e7d07fa38a345b6e1b6c84d5b053004e14d88d1/RW-Site/">
              Learning Experiences
            </a>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 px-4 max-w-7xl mx-auto">
          <TinyApp />
          <Tweeter />
          <LightBnb />
          <Proboneo />
        </div>
      </div>
    </section>
  );
};

export default Projects;
