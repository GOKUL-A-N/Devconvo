import React from 'react'

const BlogComponent = (props) => {

  // const dataurl = props.image;
  // const url = new URL(dataurl)
  return (
    <div className='flex flex-col m-10 w-[90%]   neu '>
          <div className='relative'>
            <h1 className='text-white font-bold text-[32px] p-5'>{props.title}</h1>
            <p className='p-4 text-white'>{props.description}</p><br /><br /><br />
            <div className='absolute  right-2 bottom-[0px]'>
              <h5 className='text-gray-300 text-[26px] font-semibold'>{props.username}</h5>
              <h5 className='text-gray-300 text-[26px] font-semibold'>{props.dop.substring(0,10)}</h5>
            </div>

          </div>
    </div>
  )
}

export default BlogComponent