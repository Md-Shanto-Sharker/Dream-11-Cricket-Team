import React from 'react';

const Hero = () => {
    return (
        <div className='bg-[url(/public/photos/bg-shadow.png)] bg-no-repeat bg-gray-950 bg-cover bg-center  p-32 mx-auto mt-10 rounded-3xl'>
           <div className='flex justify-center mb-8'>
             <img  className='w-[320px]' src="/public/photos/banner-main.png" alt="" />
           </div>
            <h1 className='text-[#FFFFFF] text-[40px] font-bold text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-[#FFFFFF] text-[30px] text-center font-light my-4'>Beyond Boundaries Beyond Limits</p>
            <div className='text-center mt-10'>
                <button className='btn bg-[#E7FE29] btn-outline border-4 border-black rounded-xl outline-1 outline-[#E7FE29] font-bold '>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Hero;