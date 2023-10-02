import React, { useEffect, useState, useCallback } from 'react'
import Task from './Task/Task.jsx';
import axios from 'axios';

const Tasks = ({setTaskId, taskList}) => {
  const [allTasks, setAllTasks] = useState([]);
  //Here we have to use useCallback hook.
  const fetchAllTasks = useCallback(async () => {
    const creator = localStorage.getItem('profile');
    const { data } = await axios.get(`http://localhost:3001/tasks?query=${creator}`);
    setAllTasks(data.data);
  }, [])

  useEffect(() => {
    fetchAllTasks();
  }, [fetchAllTasks])

  useEffect(() => {
    setAllTasks({ ...allTasks, taskList });
  }, [taskList])

  if (!allTasks?.length) {
    return 'No Tasks'
  }
  return (
    <>
      {allTasks?.map((task)=>(<Task setTaskId={setTaskId} task={task} allTasks={allTasks} setAllTasks={setAllTasks} />))}
    </>
  )
}

export default Tasks