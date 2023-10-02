import React from 'react'
import Icon from "react-crud-icons";
import axios from 'axios';
import "../../../../node_modules/react-crud-icons/dist/css/react-crud-icons.css";
import { useNavigate } from 'react-router-dom';
const Task = ({ setUpdate, task, setTaskId, allTasks, setAllTasks }) => {
  const navigate = useNavigate();
  const iconClick = () => {
    navigate(`/updatetask/${task.taskId}`);
  }
  const deleteClick = async () => {
    axios.delete(`http://localhost:3001/tasks/${task.taskId}`).
      then((response) => {
        const remaintask = allTasks.filter((mtask) => mtask.taskId !== task.taskId)
        console.log(remaintask);
        setAllTasks(remaintask);
        console.log(response);
      }).
      catch((error) => {
        console.log(error);
      });
  }
  return (
    <>
      <div className="bg-red-100 m-4  p-4 w-26">
        <Icon
          name="edit"
          tooltip="Edit"
          theme="light"
          size="small"
          onClick={iconClick}
        />
        <Icon
          name="delete"
          tooltip="Delete"
          theme="light"
          size="small"
          onClick={deleteClick}
        />
        <div className='flex justify-between'>
          <h1 className="text-xl font-bold ">Title - </h1>
          <div className="bg-yellow-500">{task.taskTitle}</div>
        </div>
        <div className='flex'>
          <h1 className="text-xl font-bold">Message- </h1>
          <div className="w-full bg-red-800">{task.taskMessage}</div>
        </div>
      </div>
    </>
  )
}

export default Task