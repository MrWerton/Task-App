import { Schema, model } from "mongoose";

interface Itask{
    _id: string,
    title: string,
    description: string,
    doing: boolean
}
const TaskSchema = new Schema<Itask>({
    _id:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    doing:{
        type: Boolean,
        default: false
    },
    
})

const TaskModel = model('TaskModel', TaskSchema)

export {TaskModel}