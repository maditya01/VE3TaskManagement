import React from 'react'
import Tasks from '../Tasks/Tasks'
import Form from '../Form/Form'

const Home = () => {
    return (
        <div className="text-white bg-purple-800 p-5 m-5 flex flex-wrap justify-around">
            <div className ="flex flex-wrap flex-col">
                <h1 className="text-3xl font-bold"> Your Task </h1>
                <Tasks />
            </div>
            <div className = "flex flex-wrap flex-col">
                <div>
                <h1 className='text-3xl font-bold'> Create New Task</h1>
                </div>
                <div>
                  <Form />
                </div>
            </div>
        </div>
    )
}

export default Home