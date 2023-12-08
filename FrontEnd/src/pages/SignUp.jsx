import React from 'react'

const SignUp = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
        <h3 className='text-white font-bold text-[32px]'>Sign Up</h3><br />
        <div className='w-[30%] border-2 h-[400px] bg-[#121212]'>
            <form action="" className='p-4'>
                <label className="text-white font-semibold text-[17px]"> Name
                    <input type="text" className='input' placeholder="Enter name"/>
                </label><br />
                <label className="text-white font-semibold text-[17px]"> Email
                    <input type="email" className='input' placeholder="Enter name"/>
                </label>
                <label className="text-white font-semibold text-[17px]"> Password
                    <input type="password" className='input' placeholder="Enter name"/>
                </label>
                <div className='flex items-center justify-center w-full mt-5'>
                    <br />
                    <button className='btn'>Sign Up</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SignUp