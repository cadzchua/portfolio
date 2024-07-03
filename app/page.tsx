import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Grid from "@/components/Grid";
import Main from "@/components/Main";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data/NavBar";
export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex 
    justify-center items-center flex-col overflow-hidden 
    mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Main />
        <Aboutme />
        <Grid />
        <Contact />
      </div>
    </main>
  );
}
