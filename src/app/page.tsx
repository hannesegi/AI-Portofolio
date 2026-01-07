import Header from "@/components/header";
import Hero from "@/components/sections/hero";
import TechStack from "@/components/sections/tech-stack";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import HuggingFace from "@/components/sections/hugging-face";
import Articles from "@/components/sections/articles";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Experience />
        <HuggingFace />
        <Articles />
        <section id="tech-stack" className="container py-12 md:py-24">
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-12">
            My Tech Stack
          </h2>
          <TechStack />
        </section>
      </main>
      <Footer />
    </div>
  );
}
