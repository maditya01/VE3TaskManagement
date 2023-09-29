import axios from 'axios';

const API = axios.create({baseURL: 'https://localhost:3003'});

export const fetchAllTasks = ()=>{API.get('/tasks')};
export const fetchSingleTask = (id)=>{API.get(`/tasks/${id}`)}
export const createTask = (newTask)=>{API.post(`/tasks`,newTask)};//Sending new task in body.
export const updateTask = (id,updatedTask)=>{API.put(`/tasks/${id}`,updatedTask)}; //Sending task in body.
export const deleteTask = (id)=> {API.delete(`/tasks/${id}`)};