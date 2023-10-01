import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home';
import { useState } from 'react';
import { Auth } from './components/Auth/Auth';
import Form from './components/Form/Form';

function App() {
  const [taskList, setTaskList] = useState(null);
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Home taskList={taskList} />}></Route>
        <Route path="/createtask" element={<Form setTaskList={setTaskList} />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
