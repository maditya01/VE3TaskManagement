import React from 'react'

const Task = ({ task }) => {
  console.log("here!!!");
  console.log(task?.taskTitle);
  return (
    <>
      <div className = "bg-black m-4 flex flex-col p-2">
        <p>{task.taskId}</p>
        <div>{task.taskTitle}</div>
        <div>{task.taskMessage}</div>
      </div>
    </>
  )
}

export default Task