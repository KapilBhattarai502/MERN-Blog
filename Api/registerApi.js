import express from 'express'
import cors from 'cors'
import { UserModel } from './mongodb/model.js';



const router=express.Router();
router.use(cors());

router.post("/register",async(req,res)=>{
    const newUser=req.body;
    console.log(newUser);
    try{
        
        await UserModel.create(newUser);
        res.status(200).send("Succesfully added to the mongoDB ")
      
    }
    catch(error){
        console.log(error);
        res.status(400).send({message:""})
    }
  
    
   
    

    
  
})


export default router;