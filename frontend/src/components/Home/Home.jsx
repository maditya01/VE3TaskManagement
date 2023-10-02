import React, { useEffect } from 'react'
import Tasks from '../Tasks/Tasks'
import Navbar from '../Navbar/Navbar.jsx';
import { useLocation } from 'react-router-dom';
const Home = ({ setUpdate, taskList, setUser, taskId, setTaskId }) => {
    
    return (
        <>
            <Navbar setUser={setUser} />
            <div className="text-black  p-5 m-5 flex flex-col">
                <h1 className="text-3xl font-bold"> Your Task </h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Tasks setUpdate={setUpdate} taskList={taskList} taskId={taskId} setTaskId={setTaskId} />
                </div>
            </div>
        </>
    )
}

export default Home