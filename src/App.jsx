import About from "./components/About";
import Features from "./components/Features";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Story from "./components/Story";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />

      {/* <section className="z-0 min-h-screen bg-amber-400" /> */}
    </main>
  );
}

export default App;
