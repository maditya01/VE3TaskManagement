import express from 'express';
import {fetchAllTasks,fetchSinglePost,createTask,updateTask,deleteTask} from "../controllers/tasks.js";
const router = express.Router();

router.get('/',fetchAllTasks);
router.get('/:id',fetchSinglePost);
router.post('/',createTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteTask);


export default router;