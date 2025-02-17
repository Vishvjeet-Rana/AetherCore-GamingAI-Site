import Hero from "./components/Hero";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <section className="z-0 min-h-screen bg-amber-400" />
    </main>
  );
}

export default App;
