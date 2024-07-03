import { socialMedia } from "@/data/Contacts";

const Contact = () => {
  return (
    <footer id="contact" className="w-full pt-20 pb-10">
      <div>
        <p>I am eager to leverage my problem-solving skills and technical knowledge in a challenging development role.
        I hope to make a meaningful impact in the field of technology.</p>
      </div>
      <div className="flex mt-16 flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Cadden 
        </p>
        <div className="flex items-center md:gap-5 gap-2 my-3">
            {socialMedia.map((profile) => (
                <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center">
                    {profile.img}
                </div>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
