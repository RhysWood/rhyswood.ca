import Image from "next/image";
import Welcome from "../components/Welcome/Welcome";
import IntroText from "../components/Welcome/IntroText";

export default function Home() {
  return (
    <>
      <Welcome />
      <div className="flex justify-end">
        <IntroText />
      </div>
    </>
  );
}
