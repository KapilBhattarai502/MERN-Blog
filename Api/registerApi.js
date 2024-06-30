import express from 'express'
import cors from 'cors'
import { User } from './mongodb/model.js';
import bcrypt from "bcrypt";
const saltRounds=10;




const router=express.Router();
router.use(cors());

router.post("/register",async(req,res)=>{
    let newUser=req.body;
  
   const hash=await bcrypt.hash(newUser.password,saltRounds);
   newUser.password=hash;


    try{
        
        await User.create(newUser);
        res.status(200).send("Succesfully added to the mongoDB ")
      
    }
    catch(error){
        console.log(error);
        res.status(400).send({message:error.message})
    }
  
    
   
    

    
  
})


export default router;