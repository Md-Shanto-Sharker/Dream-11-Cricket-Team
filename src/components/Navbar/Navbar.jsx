import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <img src="/public/photos/logo.png" alt="" />
      </div>
      <div className="flex items-center gap-20">
        <p>Home</p>
        <p>Fixture</p>
        <p>Teams</p>
        <p>Schedules</p>
        <button className="btn font-bold text-[16px]">
          <div className="flex items-center gap-2 ">
            <p className="mb-1"> 0 Coin</p>
            <img src="/public/photos/dollar 1.png" alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
