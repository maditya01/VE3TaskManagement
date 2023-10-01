import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import axios from 'axios';
const Form = ({ setTaskList }) => {
  const navigate = useNavigate();
  const creator = "Aditya"
  const [taskData, setTaskData] = useState({
    title: '',
    message: '',
    creator
  });
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/tasks', taskData)
      .then(response => {
        setTaskList({ taskData });
        console.log(response.data);
        setTaskData({ title: '', message: '' });
        navigate('/')
      })
      .catch(error => {
        console.error(error);
      });
    /*useState is asynchronous so here you can not get the updateed taskList array 
    you can use useEffect to see the taskList.
    */
  }

  return (
    <>
      <div className='flex items-center justify-center flex-col space-y-6'>
        <h1 className="text-3xl font-bold ">Create New Task!!!</h1>
        <form className='flex flex-col space-y-6 bg-red-200 p-10 rounded-md' onSubmit={submitHandler}>
          <div>
            <textarea value={taskData?.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
              required id="title" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Task Title"></textarea>
          </div>
          <div>
            <textarea value={taskData?.message} onChange={(e) => setTaskData({ ...taskData, message: e.target.value })}
              required id="message" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Task Description"></textarea>
          </div>
          <div className='px-2'>
            <button type="submit" className='text-lg font-bold px-5 py-1 bg-indigo-500 rounded-md'>Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form