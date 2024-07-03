import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords";
import MagicButton from "./ui/MagicButton";
import { IoNavigate } from "react-icons/io5";

const Main = () => {
  return (
    <div className="pb-36 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 
        md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] 
        w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50wh]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Hello, my name is
          </h2>

          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-6xl text-blue-100"
            words="Cadden Chua"
          />
          <div className="text-center md: tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            I am
            <FlipWords
              words={["a Developer", "a Programmer", "an AI Engineer"]}
              duration={1500}
              className="text-center md: tracking-wider
              text-sm md:text-lg lg:text-2xl"
            />
            based in Singapore.
          </div>
          <a href="#projects">
            <MagicButton
              title="Show My Work"
              icon={<IoNavigate />}
              position="right"
              otherClasses="gap-3"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
