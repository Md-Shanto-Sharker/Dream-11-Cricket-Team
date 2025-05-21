import React from "react";

const Footer = () => {
  return (
    <>
    <div className="bg-black pt-72">
        <div className=" border-b-1 border-blue-950 ">
      <footer className="footer sm:footer-horizontal  text-base-content p-10 w-11/12 mx-auto ">
        <nav>
          <h6 className="footer-title text-white">About Us</h6>
          <p className="text-white">We are a passionate team  <br /> dedicated to providing the best <br /> services to our customers.</p>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Quick Links</h6>
          
            <li className="list-disc text-white">Home</li>
            <li className="list-disc text-white">Services</li>
            <li className="list-disc text-white">About</li>
            <li className="list-disc text-white">Contact</li>
         
          
        </nav>
       
        <form>
          <h6 className="footer-title text-white">Subscribe</h6>
          <p className="text-white ">Subscribe to our newsletter for the <br /> latest updates.</p>
          <fieldset className="w-80 text-white">
            <label>Enter your email address</label>
            <div className="join">
              <input 
                type="text"
                placeholder="username@gmail.com"
                className="input input-bordered join-item text-black"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>

    <div>
    <p className="text-center pb-10 pt-5 text-white">@2024 Your Company All Rights Reserved.</p>
    </div>
    </div>
    </>
    
  );
};

export default Footer;
