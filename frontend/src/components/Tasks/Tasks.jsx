import React, { useEffect, useState, useCallback } from 'react'
import Task from './Task/Task.jsx';
import axios from 'axios';

const Tasks = ({ taskList }) => {
  const [allTasks, setAllTasks] = useState([]);
  //Here we have to use useCallback hook.
  const fetchAllTasks = useCallback(async () => {
    console.log("inside fetchallTasks")
    const { data } = await axios.get("http://localhost:3001/tasks");
    console.log(data.data)
    setAllTasks(data.data);
  }, [])

  useEffect(() => {
    console.log("first useEffect time");
    fetchAllTasks();
  }, [fetchAllTasks])
  useEffect(() => {
    console.log("second useEffect time");
    setAllTasks({ ...allTasks, taskList });
  }, [taskList])

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