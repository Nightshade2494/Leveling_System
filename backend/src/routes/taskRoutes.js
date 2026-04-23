import { Router } from 'express';
import { completeTask, createTask, deleteTask, getTasks, updateTask } from '../controllers/taskController.js';

const router = Router();
router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/complete', completeTask);

export default router;
