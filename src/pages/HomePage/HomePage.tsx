"use client";
import Hero from "./Hero/Hero";
import Future from "./Future/Future";
import AboutProject from "./AboutProject/AboutProject";
import Story from "./Story/Story";
import AboutGame from "./AboutGame/AboutGame";
import Leviathan from "./Leviathans/Leviathan";
import { Transition } from "../../components/Transition/Transition";
import Technology from "./Technology/Technology";
import { useIsPresent } from "framer-motion";

function Home() {
  const isPresent = useIsPresent();

  return (
    <>
      <main>
        <Hero />
        <Technology />
        <Future />
        
        <AboutProject />
        <AboutGame />
        <Story />
        <Leviathan />
      </main>

      <Transition isPresent={isPresent} />
    </>
  );
}

export default Home;
