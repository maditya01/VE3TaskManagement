import React from 'react'

const Task = ({ task }) => {
  // console.log("come")
  return (
    <>
      <div className = "bg-red-100 m-4 flex flex-col p-2 w-26">
        <p>{task.taskId}</p>
        <div>{task.taskTitle}</div>
        <div>{task.taskMessage}</div>
      </div>
    </>
  )
}

export default Task