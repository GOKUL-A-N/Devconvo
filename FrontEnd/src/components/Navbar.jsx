// import React from 'react'
// import {Link} from "react-router-dom"

// const Navbar = () => {
//   return (
//     <div className='flex flex-row justify-center relative z-40'>
//         <nav className='nav flex flex-wrap justify-between sm:justify-end overflow-x-scroll sm:overflow-hidden w-full sm:w-[800px] '>
//         <p className="logo">devConvo</p><br className='sm:hidden'/>
//         <div className="links">
//         <Link className='link' to="/">Home</Link>
//         <Link className='link' to="/blogs">Blogs</Link>
//         <Link className='link' to="/myblog">My Blogs</Link><br className='sm:hidden' />
//         <Link className='link' to="/createblog">Create Blogs</Link>
//         <Link className='link' to="/login">Login</Link>
//         <Link className='link' to="/signup">Sign Up</Link>
//         </div>
//     </nav>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Box,
//   AppBar,
//   Toolbar,
//   Button,
//   Typography,
//   Tabs,
//   Tab,
// } from "@emotion/styled";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Tab , Tabs } from "@mui/material";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { authActions } from "../redux/store.js";
// import toast from "react-hot-toast";
const Navbar = () => {
  // global state
  let isLogin = useSelector((state) => state.isLogin);
  isLogin = isLogin || localStorage.getItem("userId");
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  //state
  const [value, setValue] = useState();
  
  
  return (
    <>
      <nav className="bg-[#11111] relative">
        <Toolbar>
          <h3 className="logo text-white text-[28px] font-semibold">devconvo</h3>
          {isLogin && (
            <Box  className="absolute right-3" marginLeft="auto" marginRight={"auto"}>
              <Tabs
                textColor="inherit"
                value={value}
                className="mt-3"
                onChange={(e, val) => setValue(val)}
              >
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/blogs"
                >
                  Blogs
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/myblog"
                >
                  My Blogs
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/createblog"
                >
                  Create Blog
                </Button>
                
              </Tabs>
            </Box>
          )}
          <Box display={"flex"} marginLeft="auto">
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
              </>
            )}
            
          </Box>
        </Toolbar>
      </nav>
    </>
  );
};

export default Navbar;