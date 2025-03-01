import About from "./components/About";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <header className="h-[90vh] w-screen">
        <Nav />
        <Hero />
        <About />
        <Projects />
      </header>
    </div>
  );
}

