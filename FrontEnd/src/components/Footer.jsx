import React from 'react'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className='mb-20'>
        <div className='flex flex-col sm:flex-row items-center justify-center'>
            <div className='w-[30%] flex items-center justify-center'>
                <h2 className='text-[#5ad666] text-[28px] sm:text-[45px] font-semibold'>Devconvo</h2>
            </div>
            <div className='w-[40%] flex items-center justify-center flex-col'>
              <ul className='flex justify-between flex-col'>
                <Link to="/" className='text-white text-[20px]'>Home</Link>
                <Link to="/blogs" className='text-white text-[20px]'>Blogs</Link>
                <Link to="/myblogs" className='text-white text-[20px]'>My Blogs</Link>
                <Link to="/createblog" className='text-white text-[20px]'>Create Blogs</Link>
              </ul>
            </div><br className='sm:invisible' />
            <div className='w-[30%] flex items-start sm:items-center justify-center flex-col'>
              <h4 className='text-[#5f5f5f] font-semibold text-[19px] sm:text-[28px]'>Let's together </h4>
              <h4 className='text-[#5f5f5f] font-semibold text-[19px] sm:text-[28px]'>Build </h4>
              <h4 className='text-[#5f5f5f] font-semibold text-[19px] sm:text-[28px]'>a Community</h4>
            </div>
        </div>
    </div>
  )
}

export default Footer