import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

function ItemImage({ src, href }: { src: string; href?: string }) {
  const image = (
    <Image
      className="h-full w-full object-cover"
      width={500}
      height={500}
      src={src ?? ""}
      alt="project-img"
    />
  );

  return href ? (
    <Link
      target="_blank"
      href={href}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden"
    >
      {image}
    </Link>
  ) : (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
      {image}
    </div>
  );
}

export const items = [
  {
    title: "Shopping List App",
    description:
      "Streamline your shopping experience with robust database capabilities for managing items.",
    header: (
      <ItemImage
        src="/shoppinglist.png"
        href="https://github.com/cadzchua/shopping_list.git"
      />
    ),
    icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    iconLink: "https://github.com/cadzchua/shopping_list.git",
  },
  {
    title: "CommViz",
    description: "Illuminate communication through visualisation.",
    header: (
      <ItemImage
        src="/commviz.png"
        href="https://github.com/cadzchua/CommViz.git"
      />
    ),
    icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    iconLink: "https://github.com/cadzchua/CommViz.git"
  },
  {
    title: "4 Color Card Game App",
    description: "Effortlessly manage player scores and balances.",
    header: (
      <ItemImage
        src="/ssp.png"
        href="https://github.com/cadzchua/4-color-card-game.git"
      />
    ),
    icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    iconLink: "https://github.com/cadzchua/4-color-card-game.git"
  },
  {
    title: "LocateTheShip",
    description: "Streaming real-time maritime data for dynamic tracking.",
    header: (
      <ItemImage
        src="/locatetheship.png"
        href="https://github.com/cadzchua/LocateTheShip.git"
      />
    ),
    icon: <FaGithub className="h-4 w-4 text-neutral-500" />,
    iconLink: "https://github.com/cadzchua/LocateTheShip.git"
  },
];
