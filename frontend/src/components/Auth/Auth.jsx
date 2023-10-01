import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export const Auth = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false)
    const [isSignup, setIsSignup] = useState(true);
    const [userData, setUserData] = useState({
        username: '',
        useremail: '',
        userpassword: ''
    })
    const submitHandler = (e) => {
        e.preventDefault();
        if (isSignup) {
            axios.post(`http://localhost:3001/users/signup`, userData)
                .then(response => {
                    console.log(response);
                }).catch(
                    error => {
                        console.log(error);
                    });
            setUserData({
                username:'',
                useremail:'',
                userpassword:''
            })
            navigate('/')
        }
    }
    return (
        <>
            <div className="flex items-center justify-center flex-col space-y-6">
                <h1 className="text-3xl font-bold ">
                    Authentication!!!
                </h1>
                <form onSubmit={submitHandler} className='flex flex-col space-y-6 bg-red-200 p-10 rounded-md'>
                    {isSignup && <input
                        onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                        type="text"
                        className="w-72 rounded-md"
                        id="username"
                        placeholder="Enter your name " />
                    }
                    <input
                        onChange={(e) => setUserData({ ...userData, useremail: e.target.value })}
                        type="email"
                        className="w-72 rounded-md"
                        id="email"
                        placeholder="Email " />
                    <input
                        onChange={(e) => setUserData({ ...userData, userpassword: e.target.value })}
                        type="password"
                        className="w-72 rounded-md"
                        id="password"
                        placeholder="Password here" />
                    <div className='px-2 flex flex-col items-start justify-start'>
                        <button type="submit" className='m-2 w-full text-lg font-bold px-5 py-1 bg-indigo-500 rounded-md'>{isSignup ? 'SignUp' : 'Signin'}</button>
                    </div>
                </form>
                <button onClick={() => {
                    console.log("here button onclick")
                    setIsSignup((prevIsSignup) => !prevIsSignup);
                }} className='m-2 text-lg font-bold px-5 py-1 bg-indigo-500 rounded-md'>{isSignup ? 'Already have an account' : 'Do not have an account'}</button>
            </div>
        </>
    )
}
