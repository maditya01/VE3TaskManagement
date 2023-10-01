import React, { useEffect, useState } from 'react'
import * as api from '../../api/index.js'
import axios from 'axios';
const Form = ({setTaskList}) => {
  const creator = "Aditya"
  const [taskData, setTaskData] = useState({
    title: '',
    message: '',
    creator
  });
  const submitHandler = (e) => {
    e.preventDefault();
    setTaskList({taskData});
    axios.post('http://localhost:3001/tasks', taskData)
      .then(response => {
        console.log(response.data);
        setTaskData({title:'',message:''});
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
      <form className='flex flex-col bg-black m-3' onSubmit={submitHandler}>
        <div>
          <textarea value={taskData?.title} onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
            required id="title" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary m-5 textarea-bordered" placeholder="Enter Task Title"></textarea>
        </div>
        <div>
          <textarea value={taskData?.message} onChange={(e) => setTaskData({ ...taskData, message: e.target.value })}
            required id="message" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary m-5 textarea-bordered" placeholder="Enter Task Description"></textarea>
        </div>
        <div className='m-auto w-1/2  px-2'>
          <button type="submit" className='text-lg font-bold px-6 py-1 bg-indigo-500 rounded-md'>Submit</button>
        </div>
      </form>
    </>
  )
}

export default Form