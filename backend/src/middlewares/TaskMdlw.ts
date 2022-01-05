import {Task} from '../models/TaskModel'
import {validate as isUiid} from 'uuid'
import {Request, Response, NextFunction} from 'express'
 const validateid = async ( req:Request, res:Response, next:NextFunction)=>{
	const {id} = req.params;
	if(!isUiid(id)){
		return res.status(400).json({error: "this id not is valid"})
	}
	try{
		const task = await Task.findById(id)
		if(!task){
			return res.status(404).json({msg: "user not found"})
		}else{
			return next()
		}	
	}catch(err:any){
		return res.status(500).json({err: err.message})
	}
}

export {validateid}
