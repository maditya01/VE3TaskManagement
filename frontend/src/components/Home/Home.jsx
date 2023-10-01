import React,{useState} from 'react'
import Tasks from '../Tasks/Tasks'
import Form from '../Form/Form'

const Home = () => {
    const [taskList, setTaskList] = useState(null);
    return (
        <div className="text-white  p-5 m-5 flex flex-wrap justify-around">
            <div className ="flex flex-wrap flex-col">
                <h1 className="text-3xl font-bold"> Your Task </h1>
                <Tasks taskList={taskList} />
            </div>
            <div className = "flex flex-wrap flex-col">
                <div>
                <h1 className='text-3xl font-bold'> Create New Task</h1>
                </div>
                <div>
                  <Form setTaskList={setTaskList} />
                </div>
            </div>
        </div>
    )
}

export default Home