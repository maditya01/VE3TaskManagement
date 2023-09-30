
import query from '../models/db.js'

export const fetchAllTasks = async (req,res)=>{
    console.log("came here!!");
    try {
        const rows = await query(
            `SELECT taskId, taskCreator, taskTitle, taskMessage from tasks`
        );
        console.log(rows);
        res.status(200).json({data:rows});
    } catch (error) {
        console.log(error);
    }
}

export const fetchSinglePost = async (req,res)=>{
    const { id }  = req.params;
    console.log(id);
    try {
        const row = await query(
            `select taskId,taskCreator,taskTitle,taskMessage from tasks where taskId = ${id}`
        );
        console.log(row);
        res.status(200).json({data:row});
    } catch (error) {
        
    }
}

export const updateTask = async (req,res)=>{
    const { id }  = req.params;
    try {
        
    } catch (error) {
        
    }
}

export const createTask = async (req,res)=>{
    const task = req.body;
    try {
       query(`INSERT INTO tasks `) 
    } catch (error) {
        
    }
}

export const deleteTask = async (req,res)=>{
    const {_id}  = req.params;
    try {
        
    } catch (error) {
        
    }
}