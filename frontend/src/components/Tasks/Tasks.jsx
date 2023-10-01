import React, { useEffect, useState } from 'react'
import Task from './Task/Task.jsx';
import axios from 'axios';

const Tasks = ({taskList}) => {
  const [allTasks, setAllTasks] = useState([]);
  const fetchAllTasks = async () => {
    const { data } = await axios.get("http://localhost:3001/tasks");
    setAllTasks(data.data);
    console.log(data.data);
  }
  useEffect(() => {
    fetchAllTasks();
  }, [taskList])
  console.log(allTasks?.length);
  if (!allTasks?.length) {
    return 'No Tasks'
  }
  return (
    <>
      {allTasks?.map((task) => (<Task task={task} />))}
    </>
  )
}

export default Tasks