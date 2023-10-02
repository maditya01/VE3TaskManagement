import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from "react-router-dom";

import axios from 'axios';
const Form = ({ update, taskId, setTaskId, setTaskList }) => {
  const location = useLocation();
  let path = "Create Task";
  const [taskData, setTaskData] = useState({
    title: '',
    message: '',
    creator: localStorage.getItem('profile')
  });
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (taskId === null) {
      axios.post('http://localhost:3001/tasks/', taskData)
        .then(response => {
          setTaskList({ taskData });
          console.log(response.data);
          setTaskData({ title: '', message: '' });
          navigate('/')
        })
        .catch(error => {
          const message = error.response.data.message;
          navigate('/errorHandler', { state: { message } })
        });
    }
    /*useState is asynchronous so here you can not get the updateed taskList array 
    you can use useEffect to see the taskList.
    */
  }

  return (
    <>
      <div className='flex items-center justify-center flex-col space-y-6'>
        <h1 className="text-3xl font-bold ">{path}</h1>
        <form className='flex flex-col space-y-6 bg-red-200 p-10 rounded-md' onSubmit={submitHandler}>
          <div>
            <textarea value={taskData.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
              required id="title" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Task Title"></textarea>
          </div>
          <div>
            <textarea value={taskData.message} onChange={(e) => setTaskData({ ...taskData, message: e.target.value })}
              required id="message" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Task Description"></textarea>
          </div>
          <div className='px-2'>
            <button type="submit" className='text-lg font-bold px-5 py-1 bg-indigo-500 rounded-md'>{path}</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Form