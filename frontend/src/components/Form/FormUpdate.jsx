import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
const FormUpdate = ({ taskId }) => {
  const navigate  = useNavigate();
  const [updateData, setupdateData] = useState({
    title: '',
    message: ''
  })
  function getData() {
    axios.get(`http://localhost:3001/tasks/${taskId}`).
      then((res) => {
        const data = res.data.data[0]
        setupdateData({ title: data.taskTitle, message: data.taskMessage })
      }).
      catch((error) => {
        const message = error.response.data.message;
        navigate('/errorHandler', { state: { message } })
      })
  }
  useEffect(() => {
    getData();
  }, [])
  const submitHandler = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:3001/tasks/${taskId}`, updateData).
      then((response) => {
        navigate('/')
      }).
      catch((error) => {
        const message = error.response.data.message;
        navigate('/errorHandler', { state: { message } })
      })
  }
  return (
    <>
      <div className='flex items-center justify-center flex-col space-y-6'>
        <h1 className="text-3xl font-bold ">Update Task</h1>
        <form className='flex flex-col space-y-6 bg-red-200 p-10 rounded-md' onSubmit={submitHandler}>
          <div>
            <textarea value={updateData.title} onChange={(e) => setupdateData({ ...updateData, title: e.target.value })}
              required id="title" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Task Title"></textarea>
          </div>
          <div>
            <textarea value={updateData.message} onChange={(e) => setupdateData({ ...updateData, message: e.target.value })}
              required id="message" className="resize-none max-w-5xl	 rounded-md text-black textarea-primary  textarea-bordered" placeholder="Enter Task Description"></textarea>
          </div>
          <div className='px-2'>
            <button type="submit" className='text-lg font-bold px-5 py-1 bg-indigo-500 rounded-md'>Update</button>
          </div>
        </form>
      </div>
    </>

  )
}

export default FormUpdate