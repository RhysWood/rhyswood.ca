import Image from "next/legacy/image";
import Welcome from "../components/Welcome/Welcome";
import IntroText from "../components/Welcome/IntroText";
import Vessel from "../components/Vessel/Vessel";
import LHouseLabs from "../components/Lighthouse/LHouseLabs";

export default function Home() {
  return (
    <>
      <Welcome />
      <div className="flex justify-center items-center">
        <IntroText />
      </div>
      <div>
        <LHouseLabs />
      </div>
      <div>
        <Vessel />
      </div>
    </>
  );
}
