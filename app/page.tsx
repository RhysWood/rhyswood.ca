import Image from "next/image";
import Welcome from "../components/Welcome/Welcome";
import IntroText from "../components/Welcome/IntroText";
import Vessel from "../components/Vessel/Vessel"

export default function Home() {
  return (
    <>
      <Welcome />
      <div className="flex justify-center items-center">
        <IntroText />
      </div>
      <Vessel />
    </>
  );
}
