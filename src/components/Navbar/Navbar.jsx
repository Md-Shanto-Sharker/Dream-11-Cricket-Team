import React from "react";

const Navbar = ({money}) => {
  return (
    <div className="lg:flex  md:flex justify-between items-center">
      <div className="flex justify-center ">
        <img src="/photos/logo.png" alt="" />
      </div>
      <div className="flex  justify-between lg:flex md:flex items-center lg:gap-20 gap-12 text-center">
        <p>Home</p>
        <p className="hidden lg:block md:block">Fixture</p>
        <p>Teams</p>
        <p className="hidden lg:block md:block">Schedules</p>
        <button className="btn font-bold text-[12px] lg:text-xl">
          <div className="flex items-center gap-2">
            <p className="mb-1"> {money? money:0} Coin</p>
            <img src="/photos/dollar 1.png" alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
