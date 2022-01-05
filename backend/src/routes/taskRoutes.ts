import express from 'express';
import { TaskCtrl} from '../controllers/TaskCtrl';
import {validateid} from '../middlewares/TaskMdlw'
const TaskRoute = express.Router();

TaskRoute.get('/', TaskCtrl.getTask);
TaskRoute.post('/', TaskCtrl.postTask);
TaskRoute.put('/:id',validateid, TaskCtrl.updateTask);
TaskRoute.delete('/:id',validateid, TaskCtrl.deleteTask);
TaskRoute.patch('/:id',validateid, TaskCtrl.patchTask);




export {TaskRoute}