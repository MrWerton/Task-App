import express from 'express'
require('dotenv').config()
import {conectionDatabase} from './database'

const app = express();
conectionDatabase()

const port = process.env.PORT || '8070'


app.listen(port, ()=>{
    console.log(`Server run http://localhost:${port}`)
})