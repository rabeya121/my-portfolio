import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0b1326] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
