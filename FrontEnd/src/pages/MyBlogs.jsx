import React from 'react'
import BlogComponent from '../components/BlogComponent';
import Navbar from '../components/Navbar';

const MyBlogs = () => {
  return (
    <div>
        <Navbar />
        <h1 className='text-[#5ad666] text-[65px] font-semibold text-center mt-20'> <span className='heading1'>My </span>Blogs</h1><br />
        <div className=' flex flex-wrap justify-around'>
        <BlogComponent />
        <BlogComponent />
        <BlogComponent />
        <BlogComponent />
        <BlogComponent />
        <BlogComponent />
        </div>
    </div>
  )
}

export default MyBlogs