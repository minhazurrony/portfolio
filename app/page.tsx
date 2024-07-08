import {
  Hero,
  About,
  Skills,
  Experience,
  Projects,
  Contact,
} from "@/containers/home-page";

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
