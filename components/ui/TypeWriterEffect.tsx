"use client";

import { useTypewriter, Cursor } from "react-simple-typewriter";

type TypeWriterEffect = {
  className: string;
};

const TypeWriterEffect = () => {
  const [text] = useTypewriter({
    words: ["a Web Developer", "a Programmer", "an AI Engineer"],
    loop: true,
    typeSpeed: 110,
    deleteSpeed: 80,
  });

  return (
    <div>
      <h1
        className="text-center md: tracking-wider
          mb-2 text-sm md:text-lg lg:text-2xl"
      >
        I'm <span>{text}</span>
        <Cursor cursorStyle="|" />
      </h1>
    </div>
  );
};

export default TypeWriterEffect;
