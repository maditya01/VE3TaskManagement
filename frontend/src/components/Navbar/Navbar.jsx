import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
const Navbar = ({setUser}) => {
    const navigate = useNavigate();
    const user = localStorage.getItem('profile');
    return (
        <div>
            <div className="flex flex-wrap p-5 m-5 justify-between items-center">
                <button onClick={() => { navigate('/createtask') }} className="items-center bg-yellow-500 border-0 py-1 px-3 mt-4">Create New Task</button>
                {user && <button
                className='items-center bg-yellow-500 border-0 py-1 px-3 mt-4'
                onClick={() => { 
                   localStorage.removeItem('profile');
                   setUser(null);
                   navigate('/');
                 }}>Logout</button>}
            </div>
        </div>
    )
}

export default Navbar