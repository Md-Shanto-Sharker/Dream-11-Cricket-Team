import React from "react";

const Navbar = ({money}) => {
  return (
    <div className="lg:flex  md:flex justify-between items-center">
      <div className="flex justify-between items-center mb-5">
        <img className="w-28" src="/photos/logo.png" alt="" />
        <h1 className="text-3xl font-bold lg:hidden md:hidden">Dream 11 Team</h1>
      </div>
      <div className="flex  justify-between lg:flex md:flex items-center lg:gap-20 gap-12 text-center">
        <p className="text-2xl font-bold">Home</p>
        <p className="hidden lg:block md:block text-2xl font-bold">Fixture</p>
        <p className="text-2xl font-bold">Teams</p>
        <p className="hidden lg:block md:block text-2xl font-bold">Schedules</p>
        <button className="btn font-bold text-[12px] lg:text-xl">
          <div className="flex items-center gap-2">
            <p className="mb-1 "> {money? money:0} Coin</p>
            <img src="/photos/dollar 1.png" alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
