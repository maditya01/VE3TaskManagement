import React from 'react'
import Icon from "react-crud-icons";
import axios from 'axios';
import "../../../../node_modules/react-crud-icons/dist/css/react-crud-icons.css";
import { useNavigate } from 'react-router-dom';
const Task = ({ setTaskId, task, allTasks, setAllTasks }) => {
  const navigate = useNavigate();
  const iconClick = () => {
    setTaskId(task.taskId)
    navigate(`/updatetask/${task.taskId}`);
  }
  const deleteClick = async () => {
    axios.delete(`http://localhost:3001/tasks/${task.taskId}`).
      then((response) => {
        const remaintask = allTasks.filter((mtask) => mtask.taskId !== task.taskId)
        setAllTasks(remaintask);
      }).
      catch((error) => {
        console.log(error);
      });
  }
  const browseClick = ()=>{
    setTaskId(task.taskId)
    navigate(`/taskdetail/${task.taskId}`);
  }
  return (
    <>
      <div className="flex flex-col justify-items-stretch	 bg-red-100 m-4  p-4 w-26">
        <div className='flex justify-between'>
        <Icon
          name="edit"
          tooltip="Edit"
          theme="light"
          size="small"
          onClick={iconClick}
        />
        <Icon
          name="browse"
          tooltip="Browse"
          theme="light"
          size="small"
          onClick={browseClick}
        />
        <Icon
          name="delete"
          tooltip="Delete"
          theme="light"
          size="small"
          onClick={deleteClick}
        />
        </div>
        <div className='border-solid flex justify-between'>
          <h1 className="text-xl font-bold ">Title - </h1>
          <div className="truncate">{task.taskTitle}</div>
        </div>
        <div className='border-solid flex justify-between'>
          <h1 className="text-xl font-bold">Message- </h1>
          <div className="truncate">{task.taskMessage}</div>
        </div>
      </div>
    </>
  )
}

export default Task