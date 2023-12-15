import express from "express";
import mongoose from "mongoose";
import cors from "cors";
const app=express();

const port=4000;
app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.use(cors);

mongoose.connect('mongodb+srv://puji:devata@cluster0.syaimop.mongodb.net/')
.then(()=>{console.log("MongoDb connection successful")})
.catch((err)=>{console.log(err)});
app.listen(port,()=>{
    console.log("Server started");
})