import express, {json} from 'express'
import cors from 'cors'
require('dotenv').config()
import {conectionDatabase} from './database'

conectionDatabase()
const app = express();

app.use(json())
app.use(cors())

const port = process.env.PORT || '8070'


app.listen(port, ()=>{
    console.log(`Server run http://localhost:${port}`)
})