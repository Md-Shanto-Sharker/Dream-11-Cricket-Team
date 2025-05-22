import React from 'react';

const Hero = ({handleClicked}) => {
    return (
        <div className='bg-[url(/photos/bg-shadow.png)] bg-no-repeat bg-gray-950 bg-cover lg:bg-center p-10 lg:p-32 mx-auto mt-10 rounded-3xl'>
           <div className='flex justify-center mb-8'>
             <img  className='w-[320px]' src="/photos/banner-main.png" alt="" />
           </div>
            <h1 className='text-[#FFFFFF] text-[40px] font-bold text-center'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-[#FFFFFF] text-[30px] text-center font-light my-4'>Beyond Boundaries Beyond Limits</p>
            <div className='text-center mt-10'>
                <button onClick={()=>handleClicked()} className='btn bg-[#E7FE29] btn-outline border-4 border-black rounded-xl outline-4 outline-[#E7FE29] font-bold'>Claim</button>
            </div>
        </div>
    );
};

export default Hero;