import React from "react";

const Subscribe = () => {
  return (
    <div className="border-4 border-white    rounded-2xl w-11/12 mx-auto p-5">
      <div className="bg-[url(/public/photos/bg-shadow.png)]   bg-no-repeat bg-[#fcf6f6]  bg-cover bg-center lg:p-32 p-25 rounded-xl">
        <h1 className="font-bold text-[32px] text-center opacity-100">
          Subscribe to our Newsletter
        </h1>
        <p className="lg:text-[20px] text-[#797979] text-center mt-4">
          Get the latest updates and news right in your inbox!
        </p>
        <div className="lg:flex gap-5 justify-center mt-5">
          <input type="text" placeholder="Enter your email" className="input mt-2" />

          <img className="lg:w-24 w-16 mt-2" src="/photos/Frame 11.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
