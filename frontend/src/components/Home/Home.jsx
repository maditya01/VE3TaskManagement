import React, { useState } from 'react'
import Tasks from '../Tasks/Tasks'
import Navbar from '../Navbar/Navbar.jsx';
const Home = ({ taskList }) => {

    return (
        <>
            <Navbar />
            <div className="text-black  p-5 m-5 flex flex-col">
                <h1 className="text-3xl font-bold"> Your Task </h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Tasks taskList={taskList} />
                </div>
            </div>
        </>
    )
}

export default Home