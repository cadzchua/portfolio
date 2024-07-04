import React from 'react'
import { Tooltip } from "@nextui-org/react"
import Image from 'next/image'

const TooltipUI = ({
    items
}: {
    items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];}) => {
    return (
      <div className='flex row gap-2 mx-3'>
        {items.map((item, idx) => (
          <Tooltip key={idx} content={item.name}>
            <div className="relative h-14 w-14 rounded-full overflow-hidden border-1 border-white group-hover:scale-105 group-hover:z-30 transition duration-500">
                <Image
                width={100}
                height={100}
                src={item.image}
                alt={item.name}
                className="object-contain h-full w-full p-2 bg-white"
                />
            </div>
          </Tooltip>
        ))}
      </div>
    );
  };
  

export default TooltipUI;