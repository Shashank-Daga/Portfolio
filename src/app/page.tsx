import { Nav } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Project from "@/components/sections/Project";
import Skills from "@/components/sections/Skills";
import Extracurricular from "@/components/sections/Extracurricular";
import { Education } from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1 bg-[#050708]">
        <Hero />
        <About />
        <Project />
        <Skills />
        <Extracurricular />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
