import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Main = () => {

  const [button,setButton]  =useState(false)
  const handleAvailable =() =>{
    setButton(false)
  }
  const handleSelected =() =>{
    setButton(true)
  }

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
"  "

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        {
            button?<h1 className="font-bold text-3xl">Selected Player (0)</h1>:<h1 className="font-bold text-3xl">Available Players</h1>
        }
        
        <div className="join grid grid-cols-2">
          <button onClick={() => handleAvailable()} className={`join-item btn ${button?"bg-white":'bg-[#E7FE29]'}`}> Available</button>
          <button onClick={() => handleSelected()} className={`join-item btn ${button && "bg-[#E7FE29]"}`}>
            Selected (0)
          </button>
        </div>
      </div>

      

      <div>
        <div className="flex justify-between items-center mb-10">
          
         
        </div>
        {
            button===true &&(
                <h1>yesssssssssssssssssssssssssssssss</h1>
            )
        }

        {
            button===false &&(
                <div className="grid grid-cols-3 gap-20">
        {players.map((player) => (
          <Cards player={player}></Cards>
        ))}
      </div>
            )
        }
      </div>
    </>
  );
};

export default Main;
