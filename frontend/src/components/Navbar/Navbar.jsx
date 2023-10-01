import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
            <button onClick = {()=>{navigate('/createtask')}} className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 mt-4">Create New Task</button>
        </div>
    )
}

export default Navbar