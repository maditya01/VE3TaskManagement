import React from 'react'

const Form = () => {
  const submitHandler = (e)=>{
    e.preventDefault();
    console.log(e);
  }
  return (
    <>
      <form className='flex flex-col bg-black m-3' onSubmit={submitHandler}>
        <div>
          <textarea required id="title" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary m-5 textarea-bordered" placeholder="Enter Task Title"></textarea>
        </div>
        <div>
          <textarea required id="message" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary m-5 textarea-bordered" placeholder="Enter Task Description"></textarea>
        </div>
        <div className='m-auto w-1/2  px-2'>
          <button type="submit" className='text-lg font-bold px-6 py-1 bg-indigo-500 rounded-md'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Form