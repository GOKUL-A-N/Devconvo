import React from 'react'

const About = () => {
  return (
    <div className='h-screen w-full flex items-start sm:items-center justify-center'>
      <div className='flex flex-col md:flex-row-reverse items-center justify-center'>
      <div className='w-[40%] flex items-center justify-center'>
              <h3 className='text-[#5ad666] text-[28px] sm:text-[45px] font-semibold'>Our Mission</h3>
        </div>
        <div className='w-[60%] flex-1  sm:pl-20 flex items-center justify-center'>
              <p className='text-white text-[19px] sm:text-[25px]'>Devconvo is a blog website dedicated to fostering and empowering the global developer community. We believe that by sharing knowledge, providing resources, and connecting developers, we can collectively push the boundaries of technology and innovation.Learn new skills and technologies.Stay up-to-date on the latest trends and developments.Connect with other developers and collaborate on projects. Get mentorship and support from experienced developers.</p>
        </div>
        
      </div>
    </div>
  )
}

export default About