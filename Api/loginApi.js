import express from 'express';
import { User } from './mongodb/model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cors from 'cors'
const privateKey="DADLDJ2934902";



const router=express.Router();
router.use(cors());

router.post("/login",async(req,res)=>{
    const {username,password}=req.body;
    const findUser= await User.findOne({username});
    if (!findUser) {
        return res.status(404).send("User not found");
    }
    const passwordMatch=await bcrypt.compare(password,findUser.password);
    if(passwordMatch){

        jwt.sign({fullName:findUser.username},privateKey,{},function(err,token){
            if (err) throw err;
            // console.log(token)
            res.cookie('token',token).json("ok");
        })

        
    }
    else{
        res.status(404).send("Wrong Password");
    }

  
})
export default router;