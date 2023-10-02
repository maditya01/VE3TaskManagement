import React from 'react'
import { useLocation } from 'react-router-dom'
import Icon from "react-crud-icons";
import "../../../node_modules/react-crud-icons/dist/css/react-crud-icons.css";
import { useNavigate } from 'react-router-dom';
const ErrorHandler = ({ message }) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(message);
    let mess;
    if (location.state === null) {
        mess = message;
    } else {
        mess = location.state.message;
    }
    const closeClick =()=>{
        navigate("/")
    }
    return (
        <div className="flex bg-red-100 justify-center items-center border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Oh No! </strong>
            <span className="block sm:inline mx-3">{mess}</span>
            <Icon
          name="close"
          tooltip="Close"
          theme="light"
          size="small"
          onClick={closeClick}
        />
        </div>
    )
}

export default ErrorHandler