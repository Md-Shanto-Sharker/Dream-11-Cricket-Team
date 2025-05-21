import React from "react";

const Selected = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-10">
        <h1 className="font-bold text-3xl">Selected Player (4/6)</h1>
        <div className="join grid grid-cols-2">
          <button className="join-item btn  bg-[#E7FE29]">Available</button>
          <button className="join-item btn ">Selected (0)</button>
        </div>
      </div>
    </div>
  );
};

export default Selected;
