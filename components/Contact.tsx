import { socialMedia } from "@/data/Contacts";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Contact = () => {
  return (
    <footer id="contact" className="w-full pt-20 pb-10">
      <h1 className="md:text-4xl text-3xl font-bold text-purple text-center mb-20">
        Contact
      </h1>
      <div className="md:text-lg text-sm text-justify mx-10">
        <p>
          I am currently seeking new opportunities to leverage my
          problem-solving skills and technical knowledge in a challenging
          development role.
          <br />
          <br />I aim to make a meaningful impact in the field of technology.
        </p>
      </div>
      <div className="flex items-center justify-center h-full mt-40 mb-80">
        <a href="https://www.linkedin.com/in/caddenchua/">
          <MagicButton
            otherClasses="gap-2"
            title="Reach Out To Me"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Cadden
        </p>
        <div className="flex items-center md:gap-5 gap-2 my-3 mt-5">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center"
            >
              {profile.img}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
