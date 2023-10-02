import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const TaskDetails = ({ taskId }) => {
    const navigate = useNavigate();
    const [task, setTask] = useState({
        title: '',
        message: ''
    })
    function getData() {
        axios.get(`http://localhost:3001/tasks/${taskId}`).
            then((res) => {
                const data = res.data.data[0]
                setTask({ title: data.taskTitle, message: data.taskMessage })
            }).
            catch((error) => {
                const message = error.response.data.message;
                navigate('/errorHandler', { state: { message } })
            })
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className="flex flex-col h-screen">
            
                <div className="m-auto flex flex-col justify-around bg-red-100 p-6 h-96">
                <h1 className="text-3xl font-bold ">TaskDetails</h1>
                    <div>Title: {task.title}</div>
                    <div>Message: {task.message}</div>
                </div>
            </div>
        </>
    )
}

export default TaskDetails