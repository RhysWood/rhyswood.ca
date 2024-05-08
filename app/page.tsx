import Image from "next/image";
import Welcome from "../components/Welcome/Welcome";
import IntroText from "../components/Welcome/IntroText";
import Title from "../components/Lighthouse/Title";

export default function Home() {
  return (
    <>
      <Welcome />
      <IntroText />
      <Title />
    </>
  );
}
