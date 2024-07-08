import Image from "next/image";
import Link from "next/link";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

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
    header: <ItemImage src="/shoppinglist.png" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "CommViz",
    description: "Illuminate communication through visualisation.",
    header: <ItemImage src="/commviz.png" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "4 Color Card Game App",
    description: "Effortlessly manage player scores and balances.",
    header: <ItemImage src="/ssp.png" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "LocateTheShip",
    description: "Streaming real-time maritime data for dynamic tracking.",
    header: <ItemImage src="/locatetheship.png" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
