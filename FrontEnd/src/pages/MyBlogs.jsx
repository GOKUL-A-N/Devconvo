import React,{useState , useEffect} from 'react'
import MyBlogComponent from "../components/MyBlogComponent"
import Navbar from '../components/Navbar'
import axios from 'axios';

const MyBlogs = () => {

  const [blogs, setBlogs] = useState([]);

  //get user blogs
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`http://localhost:5500/blogs/user-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };

  

  useEffect(() => {
    getUserBlogs();
  }, []);
  console.log(blogs);

  return (
    <div className='w-full flex flex-col'>
        <Navbar />
        <h1 className='text-[#5ad666] text-[65px] font-semibold text-center mt-20'> <span className='heading1'>My </span>Blogs</h1><br />
        
        <div className=' flex flex-col p-10 '>
        {blogs &&
        blogs.map((blog) => (
          <div className="border-2 m-3 border-[#404040]">

            <MyBlogComponent
            
            id={blog?._id}
            // isUser={localStorage.getItem("userId") === blog?.user?._id}
            title={blog?.title}
            description={blog?.description}
            // image={blog?.image}
            username={blog?.user?.username}
            dop={blog.createdAt}
          />
          </div>
        ))}
        </div>
    </div>
  )
}

export default MyBlogs