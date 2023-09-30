import express from 'express';
import {fetchAllTasks,fetchSingleTask,createTask,updateTask,deleteTask} from "../controllers/tasks.js";
const router = express.Router();

router.get('/',fetchAllTasks);
router.get('/:id',fetchSingleTask);
router.post('/',createTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTask);


export default router;