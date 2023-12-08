import React from 'react'

const BlogComponent = (props) => {
  return (
    <div className='flex flex-col h-[350px] m-10  w-[300px] relative neu hover:scale-110'>
          <div className='h-[50%] w-full bg-white'></div>
          <div className=''>
            <h1 className='p-4 text-[28px] font-bold  text-white'>{props.title}</h1>
            <div className='absolute bottom-3 right-3'>
                <h3 className='text-[22px] font-semibold  text-[#848484]'>{props.username}</h3>
                <h3 className='text-[22px] font-semibold  text-[#848484]'>{props.dop}</h3>
            </div>
          </div>
    </div>
  )
}

export default BlogComponent