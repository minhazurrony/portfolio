import { Hero } from "@/features/hero";
import { About } from "@/features/about";
import { Skills } from "@/features/skills";
import { Experience } from "@/features/experience";
import { Projects } from "@/features/projects";
import { Contact } from "@/features/contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
