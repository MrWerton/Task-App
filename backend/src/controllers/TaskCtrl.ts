import { Task} from '../models/TaskModel'
import {v4 as uuid} from 'uuid'
import { Request, Response } from 'express'

const TaskCtrl = {
 getAllTask: async (req:Request, res:Response)=>{
  try{
    const tasks = await Task.find()
     return res.status(200).json(tasks)
  }catch(err:any){
    return res
    .status(500)
    .json({err:true, message:err.message})
  }
},
 getTaskTodo: async (req:Request, res:Response)=>{
  try{
    const tasks = await Task.find({state: false})
     return res.status(200).json(tasks)
  }catch(err:any){
    return res
    .status(500)
    .json({err:true, message:err.message})
  }
},
 getTaskDoing: async (req:Request, res:Response)=>{
  try{
    const tasks = await Task.find({state: true})
     return res.status(200).json(tasks)
  }catch(err:any){
    return res
    .status(500)
    .json({err:true, message:err.message})
  }
},
 postTask: async (req:Request, res:Response)=>{ 
 const {title, description} = req.body;
	if(!title || !description){
		return res
    .status(400)
    .json({message: "You must insert a title or a description"})	
	}
  try{
    const task = new Task({
		_id: uuid(),	
		title,
		description
		})
    await task.save()
    return res
    .status(201)
    .json({msg: "Task Created Successfully!", task})
  }catch(err:any){
    return res
    .status(400)
    .json({error: true, message: err.message});
  }
  },
  updateTask: async(req:Request, res:Response) =>{
    const { title, description } = req.body;
    if (!title && !description) {
      return res
        .status(400)
        .json({ error: "You must inform a new title or a new description" });
    }try{
        await Task.findByIdAndUpdate({_id: req.params.id}, {
        title,
        description
      })
      return res
      .status(200)
      .json({ message: "Task Updated Succesfully!" });
    } catch (err:any) {
      res
      .status(500)
      .json({ error: err.message })
    }
  },
  deleteTask: async(req:Request, res:Response)=> {
    try {
        const {id} = req.params
        await Task.findByIdAndRemove(id)
        return res
        .status(200)
        .json({ message: "Task Removed Succesfully!" });
      }catch (err:any) {
        res
        .status(500)
        .json({ error: err.message })
      }
    },
    patchTask: async(req:Request, res:Response) =>{
      try{  
         const taskCheck = await Task.findById(req.params.id)
        if(!taskCheck){
           res.json({msg: "task not found"})
        }else{
            taskCheck.state = !taskCheck.state;
            taskCheck.save()
          }
        return res
        .status(200)
        .json({ message: `task ${(taskCheck?.state) ? 'done': 'do'}!` });
      } catch (err:any) {
        res
        .status(500)
        .json({ error: err.message })
      }
    },
 
}

export {TaskCtrl}

