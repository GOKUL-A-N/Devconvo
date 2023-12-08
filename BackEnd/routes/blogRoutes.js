// const express = require('express');
import express from 'express';

// import {getAllBlogsController, createBlogController , singleBlogController , deleteBlogController , myBlogController} from "../controllers/blogController.js";
import { getAllBlogsController , createBlogController , singleBlogController , deleteBlogController , myBlogController } from '../controllers/blogController.js';

const blogRouter = express.Router();


//get all blogs
blogRouter.get("",getAllBlogsController);

//post a blog || create a new blog
blogRouter.post("/createBlog",createBlogController);

//single blog
blogRouter.post("/singleBlog/:id",singleBlogController);

//update a blog
// router.put("updateBlog/:id",updateBlogController);

//delete a blog
blogRouter.delete("/deleteBlog/:id",deleteBlogController);

//my blog
blogRouter.get("/myBlog/:id",myBlogController);
 
export default blogRouter;

