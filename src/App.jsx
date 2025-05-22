import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Subscribe from "./components/Subscribe/Subscribe";
// import toast, { Toaster } from "react-hot-toast";
import { toast, ToastContainer } from "react-toastify";
import Main from "./components/Main/Main";





function App() {
const [addPlayers,setAddPlayers] = useState([])
const handleAddPlayer =(player) =>{
  const newAddPlayers = [...addPlayers,player];
  setAddPlayers(newAddPlayers)
}




  const [money, setMoney] = useState(0);
  const handleClicked = () => {
    const newMoney = money + 6000000;
    setMoney(newMoney);
    toast.success("Credit Added to your Account");
  };

  return (
    <>
      <header className="mt-8 w-11/12 mx-auto  pb-20">
        {/* <Toaster></Toaster> */}
        <ToastContainer position="top-center"></ToastContainer>
        <Navbar money={money}></Navbar>
        <Hero handleClicked={handleClicked} />
      </header>

      <main className="w-11/12 mx-auto">
        <Main handleAddPlayer={handleAddPlayer} addPlayers={addPlayers}></Main>
        <div className="mt-10">
        {/* <Selected></Selected> */}

        </div>
      </main>

      <footer className="relative   pt-32 mt-96">
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
