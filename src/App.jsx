import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="min-h-screen text-gray-300 bg-[#0c0c1d]">
      <section>
        <Navbar />
        <Hero />
      </section>
    </div>
  );
}

export default App;
