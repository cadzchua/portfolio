import { categories } from "@/data/Aboutme";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'


const Aboutme = () => {
  return (
    <>
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
        <div className="flex h-screen w-full justify-center pt-24 px-4">
          <div className="w-full max-w-md">
            <TabGroup>
              <TabList className="flex gap-4">
                {categories.map(({ name }) => (
                  <Tab
                    key={name}
                    className="rounded-full py-1 px-3 text-sm/6 sm:text-base md:text-lg font-semibold text-white focus:outline-none data-[selected]:bg-white/10 data-[hover]:bg-white/5 data-[selected]:data-[hover]:bg-white/10 data-[focus]:outline-1 data-[focus]:outline-white"
                  >
                    {name}
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="mt-3">
                {categories.map(({ name, items }) => (
                  <TabPanel key={name} className="rounded-lg bg-white/20 p-3">
                    <ul className="flex-wrap gap-4 justify-evenly grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                      {items.map((item) => (
                        <li
                          key={item.id}
                          className="flex flex-row flex-wrap w-45 items-center gap-2 rounded-full p-2 text-sm/6 transition hover:bg-white/5"
                        >
                          <img src={item.image} className="md:h-12 md:w-12 h-10 w-10 p-1" alt={item.name} />
                          <span className="font-semibold text-white p-2 mt-1 pl-0 ml-0 md:text-base text-xs">{item.name}</span>
                        </li>
                      ))}
                    </ul>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
