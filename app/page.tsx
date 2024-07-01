import Grid from "@/components/Grid";
import Main from "@/components/Main";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { TiHome } from "react-icons/ti";
export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex 
    justify-center items-center flex-col overflow-hidden 
    mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <TiHome /> }]}
        />
        <Main />
        <Grid />
      </div>
    </main>
  );
}
