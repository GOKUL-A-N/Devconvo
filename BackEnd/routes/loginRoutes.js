import express from 'express';

import {loginController , registerController } from "../controllers/loginController.js"

const loginRouter = express.Router();


//Get all users
// router.get('/users', getAllUsersController);

//register user
loginRouter.post("/register", registerController );

//login user
loginRouter.post("/login", loginController);


export default  loginRouter;
