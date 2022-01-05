import { Schema, model } from "mongoose";

interface Itask{
    title: string,
    description: string,
    doing: boolean
}
const TaskSchema = new Schema<Itask>({
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