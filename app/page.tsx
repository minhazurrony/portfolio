import {
  Hero,
  About,
  Skills,
  Experiences,
  Projects,
  Contact,
} from "@/containers/home-page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
}
