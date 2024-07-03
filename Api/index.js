import express from 'express'
import registerRoute from "./registerApi.js"
import cors from 'cors'
import dbConnect from './mongodb/dbConnect.js';
import loginRoute from "./loginApi.js";
import jwt from "jsonwebtoken";
import multer from 'multer';
import fs from 'fs';
const uploadMiddleware=multer({dest:'./uploads'});


import cookieParser from 'cookie-parser';
const privateKey="DADLDJ2934902";



const app=express();

app.use(express.json());
app.use(cookieParser())
app.use(cors(
    {
    credentials:true,
    origin:"http://localhost:5173",
    

    
}
))




app.use(registerRoute);
app.use(loginRoute);


dbConnect();




const port=8000;



app.listen(port,()=>{
    console.log(`App is listening to port no ${port}`);
})

app.get('/profile',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:5173');
   
    const {token}=req.cookies;
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
      }
    jwt.verify(token,privateKey,{},(err,info)=>{
        if (err){
            console.error('JWT verification failed:', err);
            return res.status(401).json({ message: 'Failed to verify token' });
 
        }
        res.json(info);
    })
})



app.post('/logout',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin','http://localhost:5173');
    res.cookie('token','').json('ok');

})

app.post('/post',uploadMiddleware.single("file"),(req,res)=>{

    
    if (!req.file) {
        return res.status(400).json({ message: 'File upload failed' });
    }
    const {originalname,path}=req.file;
    const parts=originalname.split('.');
    const ext=parts[parts.length - 1];
    const newpath=path+'.'+ext;
    fs.renameSync(path,newpath);
    
    res.json(req.file);



})







