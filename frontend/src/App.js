import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom'
import Home from './components/Home/Home';
import { useState } from 'react';
import { Auth } from './components/Auth/Auth';
import Form from './components/Form/Form';

function App() {
  const [taskList, setTaskList] = useState(null);
  const [user,setUser] = useState(localStorage.getItem('profile'))
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home taskList={taskList} setUser={setUser}/> : <Navigate to ="/auth" />}></Route>
        {user && <Route path="/createtask" element={<Form setTaskList={setTaskList} />}></Route>}
        <Route path="/auth" element={<Auth setUser={setUser} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
