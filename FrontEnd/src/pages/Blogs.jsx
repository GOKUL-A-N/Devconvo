import React,{useState , useEffect} from 'react'
import BlogComponent from "../components/BlogComponent"
import Navbar from '../components/Navbar'
import axios from 'axios';

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);
  //get blogs
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("http://localhost:5500/blogs/all-blog");
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
        <Navbar />
        <h1 className='text-[#5ad666] text-[65px] w-full font-semibold text-center mt-20'> <span className='heading1'>Dev </span>Blogs</h1><br />
        <div className='flex flex-row justify-center invisible'>
          <button className='btn mr-3'>Popular</button>
          <button className='btn'>Latest</button>
        </div><br />
        <div className=' flex flex-wrap'>
        {blogs &&
        blogs.map((blog) => (
          <BlogComponent
            id={blog?._id}
            // isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            // image={blog?.image}
            username={blog?.user?.username}
            dop={blog.createdAt}
          />
        ))}
        </div>
    </div>
  )
}

export default Blogs