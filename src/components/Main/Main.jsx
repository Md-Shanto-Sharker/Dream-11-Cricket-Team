import React, { useEffect, useState } from "react";
import Cards from "./Cards";

const Main = ({ handleAddPlayer, addPlayers }) => {
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
          <h1 className="font-bold text-3xl">Selected Player {0}</h1>
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
            Selected (0)
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center "></div>
        {button === true && (
          <div>
            {add ? (
              addPlayers.map((add) => <p add={add} key={add.playerId}>{add.playerId}</p>)
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
                player={player} key={player.playerId}
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
