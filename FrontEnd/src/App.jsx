import React from 'react';
import {Routes , Route} from "react-router-dom";
import Home from"./components/Home";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import MyBlogs from "./pages/MyBlogs";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/createblog' element={<CreateBlog />} />
        <Route path='/myblog' element={<MyBlogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  )
}

export default App