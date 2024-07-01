import express from 'express'
import registerRoute from "./registerApi.js"
import cors from 'cors'
import dbConnect from './mongodb/dbConnect.js';
import loginRoute from "./loginApi.js";
import jwt from "jsonwebtoken";

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
    jwt.verify(token,privateKey,{},(err,info)=>{
        if (err) throw err;
        res.json(info);
    })
})








