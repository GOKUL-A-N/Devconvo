import express from 'express';
import {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogControlller,
} from "../controllers/blogControlller.js";

//router object
const blogRouter = express.Router();

//routes
// GET || all blogs
blogRouter.get("/all-blog", getAllBlogsController);

//POST || create blog
blogRouter.post("/create-blog", createBlogController);

//PUT || update blog
blogRouter.put("/update-blog/:id", updateBlogController);

//GET || SIngle Blog Details
blogRouter.get("/get-blog/:id", getBlogByIdController);

//DELETE || delete blog
blogRouter.delete("/delete-blog/:id", deleteBlogController);

//GET || user blog
blogRouter.get("/user-blog/:id", userBlogControlller);

export default blogRouter;