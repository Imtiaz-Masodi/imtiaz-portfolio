import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <div className="bg-sky-100 w-screen h-40"></div>
    </>
  );
}

export default App;
