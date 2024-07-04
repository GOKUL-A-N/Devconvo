import React from 'react'
import axios from 'axios';

const MyBlogComponent = (props) => {


    const handleDelete = async () => {
        try {
          const { data } = await axios.delete(`http://localhost:5500/blogs/delete-blog/${props.id}`);
          if (data?.success) {
            alert("Blog Deleted");
            window.location.reload();
          }
        } catch (error) {
          console.log(error);
        }
      };
  // const dataurl = props.image;
  // const url = new URL(dataurl)
  return (
    <div className='flex flex-col h-fit w-[90%] '>
          <div className='relative'>
            <h1 className='text-white font-bold text-[32px] p-5'>{props.title}</h1>
            <p className='p-7 text-white'>{props.description}</p><br /><br /><br /> 
            <div className='absolute  right-2 bottom-12'>
              {/* <h5 className='text-gray-300 text-[26px] font-semibold'>{props.username}</h5> */}
              <h5 className='text-gray-300 text-[26px] font-semibold'>{props.dop.substring(0,10)}</h5>
              <div className='absolute top-10 '>
                <button className='text-white border-2 border-[#ff4848] hover:bg-[#ff4848] p-2' onClick={handleDelete}>Delete</button>
            </div>
            </div>
            
          </div>
    </div>
  )
}

export default MyBlogComponent