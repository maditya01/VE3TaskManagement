
import query from '../models/db.js'

export const fetchAllTasks = async (req, res) => {
    const message = req.query;
    console.log(message);
    try {
        const rows = await query(
            `SELECT taskId, taskCreator, taskTitle, taskMessage from tasks where taskCreator = '${message.query}'`
        );
        console.log(rows);
        res.status(200).json({ data: rows });
    } catch (error) {
        console.log(error);
    }
}

export const fetchSingleTask = async (req, res) => {
    const { id } = req.params;
    try {
        const row = await query(
            `select taskId,taskCreator,taskTitle,taskMessage from tasks where taskId = ${id}`
        );
        console.log(row);
        res.status(200).json({ data: row });
    } catch (error) {

    }
}

export const updateTask = async (req, res) => {
    const { id } = req.params;
    try {

    } catch (error) {

    }
}

export const createTask = async (req, res) => {
    const task = req.body;
    console.log(task);
    try {
        const row = await query(`INSERT INTO tasks (taskCreator, taskTitle, taskMessage) values ('${task.creator}', '${task.title}', '${task.message}')`);
        if (row.affectedRows) {
            res.status(200).json({ message: "succesfully inserted" });
        }
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (req, res) => {
    const { _id } = req.params;
    try {

    } catch (error) {

    }
}