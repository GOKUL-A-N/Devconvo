import express from "express"
import{
  getAllUsers,
  registerController,
  loginController,
} from "../controllers/userController.js";

//router object
const userRouter = express.Router();

// GET ALL USERS || GET
userRouter.get("/all-users", getAllUsers);

// CREATE USER || POST
userRouter.post("/register", registerController);

//LOGIN || POST
userRouter.post("/login", loginController);

export default userRouter;