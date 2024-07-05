import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { items } from "@/data/GridData";

const Grid = () => {
  return (
    <section id="projects">
      <div className="flex flex-col gap-10 max-w-4xl mx-auto mb-10">
        <h2 className="font-bold text-4xl text-white">Best Project</h2>
        <BentoGrid className="">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 1 || i === 2 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Grid;
