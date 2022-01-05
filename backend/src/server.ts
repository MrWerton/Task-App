import express, {json} from 'express'
import cors from 'cors'
require('dotenv').config()
import {conectionDatabase} from './database'
import {TaskRoute} from '../src/routes/taskRoutes'

conectionDatabase()
const app = express();

app.use(json())
app.use(cors())
app.use('/task', TaskRoute)

const port = process.env.PORT || '8080'


app.listen(port, ()=>{
    console.log(`Server run http://localhost:${port}`)
})