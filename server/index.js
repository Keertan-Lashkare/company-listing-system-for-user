import express from 'express';
import mysql, { createConnection } from 'mysql2';
import cors from 'cors';
import bodyParser from 'body-parser';
import db from './database.js'
import show from './router/show.js';
import insert from './router/insert.js';
import sing from './router/sing.js'
import dalete from './router/delete.js'
import update from './router/update.js'
import login from './router/login.js'



const app=express();
app.use(cors())
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}))





app.get("/",(req,res)=>{
    res.send("home page");
})


app.use("/show",show)
app.use("/insert",insert)
app.use("/sing",sing)
app.use("/delete",dalete)
app.use("/update",update)
app.use("/login",login)

app.listen(5000,()=>{
    console.log("serer is worling");
})
