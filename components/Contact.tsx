import { socialMedia } from "@/data/Contacts";
import React from "react";

const Contact = () => {
  return (
    <footer id="contact" className="w-full pt-20 pb-10">
      <div className="flex mt-16 flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Cadden 
        </p>
        <div className="flex items-center md:gap-3 my-3">
            {socialMedia.map((profile) => (
                <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center">
                    {/* <img src={profile.img} alt={profile.id}
                    width={30} height={30} /> */}
                    {profile.img}
                </div>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
