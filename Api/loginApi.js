import express from 'express';

import mongoose from 'mongoose';
import { User } from './mongodb/model.js';



const router=express.Router();

router.post("/login",async(req,res)=>{
    console.log(req.body);
    const {username,password}=req.body;
    const findUser= await User.findOne({username});
    const passwordMatch=bcrypt.compare(password,findUser.password);
    if(passwordMatch){
        res.status(200).send("Successfully Logged In")
    }
    else{
        res.status(404).send("Wrong Password");
    }

    console.log(findUser);
})
export default router;