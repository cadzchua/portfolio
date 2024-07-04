import { aboutMe } from "@/data/Aboutme";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { Meteors } from "./ui/MeteorEffect";
import TooltipUI from "./ui/Tooltip";

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
    <div className=" w-[70%] relative mx-auto mb-20">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-teal-500 to-green-500 transform scale-[0.95] rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-white  px-6 py-8 h-full overflow-hidden rounded-3xl flex flex-col justify-end items-center">
        

                <p className= "text-center justify-center font-bold text-xl text-white mb-10 z-50">
                    Languages Used
                </p>
                <TooltipUI items={aboutMe}/>
                <Meteors number={20} />
            </div>
        </div>
    </section>
  );
};

export default Aboutme;
