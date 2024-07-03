import { BackgroundGradient } from "./ui/BackgroundGradient";

const Aboutme = () => {
  return (
    <section id="aboutme">
      <BackgroundGradient
        className="rounded-[22px] max-w-full h-200 p-7 bg-white dark:bg-zinc-900"
        containerClassName="mx-auto max-w-[80%] sm:max-w-[70%] mb-20"
      >
        <img
          src="/profile.jpeg"
          height="400"
          width="400"
          className="object-contain rounded-[22px] mx-auto"
        ></img>

        <p className="sm:text-lg text lg:text-2xl text-base text-center text-black mt-6 mb-7 dark:text-neutral-200">
          About Me
        </p>
        <p className="sm:text-sm lg:text-lg text-xs text-justify sm:mx-8 mx-5  text-neutral-600 dark:text-neutral-400">
        &emsp; I am a freshman student at Nanyang Technological University, 
        I am passionate about software development and AI/ML. 
        I like to learn new things everyday and I also participate in CTFs. 
        I am looking to specialise in the field of Artificial Intelligence (AI) 
        as it is really interesting that humans are trying to create an artificial "brain".
        <br />
        <br />
        &emsp; During my free time, I like to play mobile/PC games and also exercise to keep myself fit.
        </p>
      </BackgroundGradient>
    </section>
  );
};

export default Aboutme;
