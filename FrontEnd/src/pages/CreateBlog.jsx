import React from 'react'

const CreateBlog = () => {
  return (
    <div className=''>
      <div className='h-96 w-[90%] p-0 sm:p-4 md:p-10'>
        <h1 className='p-4 font-bold text-white text-[40px] text-center'>Share Your <span className='text-[#5ad666]'>Thoughts</span></h1>
      <form className="w-full m-10">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className ="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Title
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" name='title' type="text" placeholder="Title" />
      <p className="text-red-500 text-xs italic">Please fill out this field.</p>
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name='name' type="text" placeholder="Name" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Email Address
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name='email' type="email" placeholder="********@*****.**" />
    </div>
  </div>
    
    <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
        Content
      </label>
      <textarea name='message' rows="50" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        
      </textarea>
    </div>
    <div className="flex justify-between w-full px-3">
      <div className="md:flex md:items-center">
        {/* <label class="block text-gray-500 font-bold">
          <input class="mr-2 leading-tight" type="checkbox" />
          <span class="text-sm">
            Send me your newsletter!
          </span>
        </label> */}
      </div>
      <button className="btn" type="submit">
        <h6 className='p-1 '>Share</h6> 
      </button>
    </div>
      
  </div>
    
</form>
      </div>
    </div>
  )
}

export default CreateBlog