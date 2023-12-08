import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen flex pl-10 items-center relative '>
        <div className=''>
            <div className='flex  flex-col  bg-[#111111] '>
                <h1 className='text-[30px] sm:text-[60px] text-white  font-bold'><span className='heading1 '>DevConvo </span>: Unleash your inner developer</h1>
                <h3 className='text-[30px] font-semibold text-[#979797]'>Learn, share, and grow with our community of developers</h3><br />
                <button className='btn font-semibold'>Explore Now</button>
            </div>
           
        </div>
        <div className='w-[25%] h-[400px] border-4 border-l-0 right-40 absolute rounded-md invisible md:visible animate-pulse'></div>
    </div>
  )
}

export default Hero