
import query from '../models/db.js'

export const fetchAllTasks = async (req, res) => {
    const message = req.query;
    try {
        const rows = await query(
            `SELECT taskId, taskCreator, taskTitle, taskMessage from tasks where taskCreator = '${message.query}'`
        );
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
        if (row.length > 0) res.status(200).json({ data: row });
        else res.status(404).json({ message: "Given task does not exist" })
    } catch (error) {
        console.log(error)
    }
}

export const updateTask = async (req, res) => {
    const { title, message } = req.body;
    const { id } = req.params;
    try {
        const rowUp = await query(`update tasks set taskTitle = '${title}', taskMessage = '${message}' where taskId = '${id}'`)
        console.log(rowUp);
        if (rowUp.affectedRows) {
            res.status(200).json({ message: "Update succesffuly!!!" });
        }
    } catch (error) {
        console.log(error)
    }
}

export const createTask = async (req, res) => {
    let task = req.body;
    let mess = task.message;
    let tit = task.title;
    mess = mess.replace(/'/g, '"')
    tit = tit.replace(/'/g, '"')
    try {
        const row = await query(`INSERT INTO tasks (taskCreator, taskTitle, taskMessage) values ('${task.creator}', '${tit}', '${mess}')`);
        if (row.affectedRows) {
            res.status(200).json({ message: "succesfully inserted" });
        } else {
            res.status(404).json({ message: "Given data has not been inserted" })
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Given data has not been inserted" })
    }
}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
    try {
        const postRow = await query(`delete from tasks where taskId='${id}'`)
        if (postRow.affectedRows) {
            res.status(200).json({ message: `${id} is deleted` });
        } else res.status(404).json({ message: "Hun not so smart does not exist " })
    } catch (error) {
        console.log(error);
    }
}