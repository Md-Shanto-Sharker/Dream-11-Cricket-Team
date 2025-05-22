import React from "react";
import { FaFlag } from "react-icons/fa";

const Cards = ({ player, handleAddPlayer, handleAdd }) => {
  return (
    <>
      <div className="card bg-base-100  shadow-2xl border-2 border-blue-100 ">
        <figure className="px-10 pt-10">
          <img
            className="w-[600px] h-64 rounded-2xl"
            src={player.image}
            alt="Shoes"
            //   class="rounded-xl"
          />
        </figure>
        <div className="card-body ">
          <div className="flex gap-5">
            <img src="/public/photos/Group.png" alt="" />
            <h2 className="card-title">{player.name}</h2>
          </div>

          <div className="flex justify-between items-center border-b-1 border-gray-300 ">
            <div className="flex gap-2 items-center mb-3">
              <FaFlag color="gray" />
              <p className="text-gray-500">{player.country}</p>
            </div>
            <button className="btn border-none mb-3">All-Rounder</button>
          </div>
          <div>
            <h1 className="text-[24px] font-bold">Rating</h1>
            <div className="flex justify-between items-center mb-3 mt-3">
              <h1 className="text-[16px] font-semibold">
                {player.battingType}
              </h1>
              <h1 className="text-[16px] font-semibold text-gray-400">
                {player.bowlingType}
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-[16px] font-semibold">
                Price : $ {player.biddingPrice}
              </h1>
              <button
                onClick={() => {
                  handleAddPlayer(player, player.playerId);
                  handleAdd();
                }}
                className="btn hover:bg-[#E7FE29] "
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 2222 */}
    </>
  );
};

export default Cards;
