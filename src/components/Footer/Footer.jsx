import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-black pt-72">
        <div className="flex justify-center">
          <img src="/photos/logo-footer.png" alt="" />
        </div>
        <div className=" border-b-1 border-blue-950 ">
          <footer className="flex justify-between sm:footer-horizontal  text-base-content p-10 w-11/12 mx-auto ">
            <nav>
              <h6 className=" text-white font-bold text-2xl">About Us</h6>
              <p className="text-white font-light text-[12px] ">
                We are a passionate team <br /> dedicated to providing the best{" "}
                <br /> services to our customers.
              </p>
            </nav>
            <nav>
              <h6 className="font-bold text-white">Quick Links</h6>

              <li className="list-disc text-white text-[12px]">Home</li>
              <li className="list-disc text-white text-[12px]">Services</li>
              <li className="list-disc text-white text-[12px]">About</li>
              <li className="list-disc text-white text-[12px]">Contact</li>
            </nav>

            <form>
              <h6 className=" text-white font-bold mb-2">Subscribe</h6>
              <p className="text-white text-[12px] mb-2">
                Subscribe to our newsletter for the <br /> latest updates.
              </p>
              <fieldset className="w-80 text-white text-[12px] ">
                <label className="">Enter your email address</label>
                <div className="join">
                  <input
                    type="text"
                    placeholder="username@gmail.com"
                    className="input input-bordered join-item text-black"
                  />
                  {/* <img  className="join-item w-24  rounded-none" src="/public/photos/Frame 11.png" alt="" /> */}
                  <button className="btn  bg-linear-to-r from-pink-300 to-yellow-300  join-item ">
                    Subscribe
                  </button>
                </div>
              </fieldset>
            </form>
          </footer>
        </div>

        <div>
          <p className="text-center pb-10 pt-5 text-white text-[12px]">
            @2024 Your Company All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
