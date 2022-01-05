import {TaskModel as Task} from '../models/TaskModel'
import {v4 as uuid} from 'uuid'
import { Request, Response } from 'express'

const TaskCtrl = {
 getTask: async (req:Request, res:Response)=>{
  try{
    const tasks = await Task.find({})
     return res.status(200).json({tasks})
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
    .json({error: "You must insert a title or a description"})	
	}
  try{
    const task = new Task({
		_id: uuid(),	
		title,
		description,
		doing: false
		})
    await task.save()
    return res
    .status(201)
    .json({msg: "Task Created Successfully!"})
  }catch(err:any){
    return res
    .status(400)
    .json({error: true, message: err.message});
  }
  },
  updateTask: async(req:Request, res:Response) =>{
    const { title, description, doing } = req.body;
    if (!title && !description) {
      return res
        .status(400)
        .json({ error: "You must inform a new title or a new link" });
    }try{
       await Task.findOneAndUpdate({_id: req.params.id}, {
        title,
        description,
        doing
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
  DeleteTask: async(req:Request, res:Response)=> {
      const {id} = req.params
      try {
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
 
}

export {TaskCtrl}