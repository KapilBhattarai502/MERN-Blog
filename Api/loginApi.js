import express from 'express';

import mongoose from 'mongoose';
import { User } from './mongodb/model.js';
import bcrypt from 'bcrypt';



const router=express.Router();

router.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    const findUser= await User.findOne({username});
    const passwordMatch=await bcrypt.compare(password,findUser.password);
    if(passwordMatch){

        res.status(200).send("Successfully Logged In")
    }
    else{
        res.status(404).send("Wrong Password");
    }

    console.log(findUser);
})
export default router;