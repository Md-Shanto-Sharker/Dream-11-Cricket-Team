import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { RiDeleteBin6Line } from "react-icons/ri";

const Main = ({ handleAddPlayer, addPlayers ,handleRemove,handleRemove2}) => {
 


  const [add, setAdd] = useState(false);
  const handleAdd = () => {
    setAdd(true);
  };

  const [button, setButton] = useState(false);
  const handleAvailable = () => {
    setButton(false);
  };
  const handleSelected = () => {
    setButton(true);
  };

  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("player.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  ("  ");

  return (
    <>
      <div className="flex justify-between items-center mb-10">
        {button ? (
          <h1 className="font-bold text-3xl">Selected Player {addPlayers.length}/6</h1>
        ) : (
          <h1 className="font-bold text-3xl">Available Players</h1>
        )}

        <div className="join grid grid-cols-2">
          <button
            onClick={() => handleAvailable()}
            className={`join-item btn ${button ? "bg-white" : "bg-[#E7FE29]"}`}
          >
            {" "}
            Available
          </button>
          <button
            onClick={() => handleSelected()}
            className={`join-item btn ${button && "bg-[#E7FE29]"}`}
          >
            Selected ({addPlayers.length})
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center "></div>
        {button === true && (
          <div>
            {add ? (
              addPlayers.map((add) => (
                <div
                  key={add.playerId}
                  add={add}
                  className="border-2 border-[#e6e6e6] items-center justify-between p-5 mb-5 flex rounded-xl
                "
                >
                  <div className="flex gap-10">
                    <div>
                      <img
                        className="w-24 h-14 rounded-lg"
                        src={add.image}
                        alt=""
                      />
                    </div>
                    <div>
                      <p className="font-bold text-2xl">{add.name}</p>
                      <p className="text-[13px]">{add.battingType}</p>
                    </div>
                  </div>
                  <button onClick={()=>{handleRemove(add.playerId);handleRemove2();}} className="hover:bg-red-400 p-2 "><RiDeleteBin6Line  size={20}  className="text-red-600 hover:text-white"/></button>
                </div>
              ))
            ) : (
              <h1 className="font-bold text-4xl  mb-10">
                No Players Add This Section
              </h1>
            )}

            <button className="btn bg-[#E7FE29] btn-outline border-2 border-black rounded-xl outline-2 outline-[#E7FE29] font-bold">
              Add More Player
            </button>
          </div>
        )}

        {button === false && (
          <div className="grid grid-cols-3 gap-20">
            {players.map((player) => (
              <Cards
                player={player}
                key={player.playerId}
                handleAddPlayer={handleAddPlayer}
                handleAdd={handleAdd}
              ></Cards>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
