import Image from "next/legacy/image";
import Welcome from "../components/Welcome/Welcome";
import IntroText from "../components/Welcome/IntroText";
import Vessel from "../components/Vessel/Vessel";
import Tricor from "../components/Tricor/Tricor";
import LHouseLabs from "../components/Lighthouse/LHouseLabs";
import Projects from "@/components/Lighthouse/projectsSections/Projects";

export default function Home() {
  return (
    <>
      <Welcome />
      <IntroText />

      <div>
        <LHouseLabs />
        <Projects />
      </div>
      <div>
        <Vessel />
      </div>
      <div>
        <Tricor />
      </div>
    </>
  );
}
