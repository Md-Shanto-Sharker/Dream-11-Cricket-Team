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
  const [addPlayers, setAddPlayers] = useState([]);
  const handleAddPlayer = (player) => {
    const alreadyAdded = addPlayers.find((p) => p.playerId === player.playerId);

    if (alreadyAdded) {
      toast.error("Player already added");
      return;
    }
    if (addPlayers.length >= 6) {
      toast.error("Squad full!!");
      return;
    }

    if (money >= player.biddingPrice) {
      const newAddPlayers = [...addPlayers, player];
      const newMoney2 = money - player.biddingPrice;
      setMoney(newMoney2);
      setAddPlayers(newAddPlayers);
      toast.success("Congrats !! This Player now in your squad");
    } else {
      toast.error("Not enough money to buy this player.Claim some Credit");
    }
  };
  console.log(addPlayers.length);
  const handleRemove = (playerId) => {
    const removePlayers = addPlayers.filter(
      (mark) => mark.playerId !== playerId
    );
    setAddPlayers(removePlayers);
  };

  const handleRemove2 = () => {
    toast.warn("Player removed");
  };

  const [money, setMoney] = useState(0);
  const handleClicked = (id) => {
    const newMoney = money + 6000000;
    setMoney(newMoney);
    toast.success("Credit Added to your Account");
    handleRemove(id);
    handleAddPlayer;
  };

  return (
    <>
      <header className="mt-4 lg:mt-8 w-11/12 mx-auto  pb-20">
        
        <ToastContainer position="top-center"></ToastContainer>
        <Navbar money={money}></Navbar>
        <Hero handleClicked={handleClicked} />
      </header>

      <main className="w-11/12 mx-auto">
        <Main
          handleAddPlayer={handleAddPlayer}
          addPlayers={addPlayers}
          handleRemove={handleRemove}
          handleRemove2={handleRemove2}
        ></Main>
        <div className="mt-10">{/* <Selected></Selected> */}</div>
      </main>

      <footer className="relative pt-96  lg:pt-42 lg:mt-68">
        {/* Subscribe section */}
        <div className="absolute w-full -top-1 md:top-56  lg:-top-24 z-10">
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
