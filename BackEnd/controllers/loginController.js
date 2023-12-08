import  {login}  from "../models/loginModels.js";
import bcrypt from "bcrypt";

//create a new user account

export const registerController = async (req,res) => {
    try{
        const {username, email , password} = req.body;

        //validation
        if(!username || !email || !password ) {
            return res.status(400).send({
                success: false,
                message: "Please do enter all information",
            });
        }

        //checking for exxisting username
        const existingUser = await login.findOne({email});
        if(existingUser){
            return res.status(400).send({
                success: false,
                message: "Sorry email address already exists",
            });
        }

        //save user
        const hashedPassword = await bcrypt.hash(password , 10);

        const user = new login({username,password: hashedPassword,email})

        await user.save();

        return res.status(201).send({
            success: true,
            message: "New User Created",
            user,
          });
    
    }catch (error) {
        console.log(error);
        return res.status(500).send({
          message: "Error In Register callback",
          success: false,
          error,
        });
      }
}

//login user
export const loginController = async (req, res) => {
    try{
        const {email , password} = req.body;

        //validation 
        if(!email || !password){
            return res.status(400).send({
                success: false,
                message: "Please enter valid email address or password",
            });
        }

        //checking user
        const user = await login.findOne({email });

        if(!user){
            return res.status(401).send({
                success: false,
                message: "email not registered",
                
            });
            // console.log("email not registered");
        }

        //checking password
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).send({
                success: false,
                message: "password incorrect",
            })
        }

        return res.status(200).send({
            success: true,
            message: "success",
            user,
        });

    }catch(err){
        console.log(err.message);
        return res.status(500).send({
            success: false,
            message: "Error In Register callback",
            error,
        });
    }
}

//