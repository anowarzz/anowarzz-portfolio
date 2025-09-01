import AboutMe from "@/components/sections/AboutMe";
import Education from "@/components/sections/Education";
import HeroSection from "@/components/sections/HeroSection";
import MyProjects from "@/components/sections/MyProjects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Education />
      <Skills />
      <MyProjects />
      <AboutMe />
    </main>
  );
}
