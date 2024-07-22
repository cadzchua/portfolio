import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { items } from "@/data/GridData";

const Grid = () => {
  return (
    <section id="projects" className="pt-10">
      <div className="flex flex-col gap-10 max-w-4xl mx-auto mt-20 mb-40">
        <h2 className="font-bold md:text-4xl text-3xl text-purple mb-20 text-center">
          My Projects
        </h2>
        <BentoGrid className="">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              iconLink={item.iconLink}
              className={i === 1 || i === 2 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
