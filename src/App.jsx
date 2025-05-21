import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <header className="mt-8 w-11/12 mx-auto pb-96">
        <Navbar></Navbar>
        <Hero />
      </header>
      <main></main>

      <footer className="relative   pt-32">
        {/* Subscribe section */}
        <div className="absolute w-full -top-24 z-10">
          <Subscribe></Subscribe>
        </div>
        <div className="relative ">
          <Footer></Footer>
        </div>
      </footer>
    </>
  );
}

export default App;
