import './App.css';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Home from './components/Home/Home';
import { useState, useEffect } from 'react';
import { Auth } from './components/Auth/Auth';
import Form from './components/Form/Form';
import ErrorHandler from './components/Error/ErrorHandler';
import FormUpdate from './components/Form/FormUpdate';
import TaskDetails from './components/Tasks/Task/TaskDetails';
function App() {
  const [taskList, setTaskList] = useState(null);
  const [user, setUser] = useState(localStorage.getItem('profile'))
  const [taskId, setTaskId] = useState(null);
  const [update, setUpdate] = useState(false);
  const message = "Invalid path";
  return (
    <Routes>
      <Route path="/" element={user ? <Home setTaskId={setTaskId} taskList={taskList} setUser={setUser} /> : <Navigate to="/auth" />}></Route>
      {user && <Route path="/createtask" element={<Form update={update} setTaskId={setTaskId} taskId={taskId} setTaskList={setTaskList} />}></Route>}
      {user && <Route path="/updatetask/:id" element ={<FormUpdate taskId={taskId} />}></Route>}
      {user && <Route path="/taskdetail/:id" element ={<TaskDetails taskId={taskId} />}></Route>}
      <Route path="/auth" element={<Auth setUser={setUser} />}></Route>
      <Route path="/errorHandler" element={<ErrorHandler message={message} />}></Route>
      <Route path="*" element={<Navigate to="/errorHandler" />} />
    </Routes>
  );
}

export default App;
