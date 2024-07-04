import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/store';
import toast from "react-hot-toast";

const Login = () => {

    const navigate = useNavigate();
  const dispatch = useDispatch();
  //state
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  //handle input change
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //form handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5500/users/login", {
        email: inputs.email,
        password: inputs.password,
      });
      if (data.success) {
        localStorage.setItem("userId", data?.user._id);
        dispatch(authActions.login());
        toast.success("User login Successfully");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
        <h3 className='text-white font-bold text-[32px]'>Log In</h3><br />
        <div className='w-[30%] border-2 h-[400px] bg-[#121212]'>
            <form action="" onSubmit={handleSubmit} className='p-4'>
                {/* <label className="text-white font-semibold text-[17px]"> Name
                    <input type="text" className='input' placeholder="Enter name"/>
                </label><br /> */}
                <label className="text-white font-semibold text-[17px]"   > Email
                    <input type="email" className='input text-black' value={inputs.email} name="email" onChange={handleChange} placeholder="Enter your mail" />
                </label>
                <label className="text-white font-semibold text-[17px]"> Password
                    <input type="password" className='input text-black' value={inputs.password} name='password' onChange={handleChange} placeholder="Enter your password" />
                </label>
                <div className='flex items-center justify-center w-full mt-5'>
                    <br />
                    <button className='btn' type='submit'>Log In</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login