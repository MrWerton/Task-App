import { Schema, model } from "mongoose";

interface Itask{
    _id: string,
    title: string,
    description: string,
    state: boolean
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
    state:{
        type: Boolean,
        default: false
    },
    
})

const Task = model('Task', TaskSchema)

export {Task}