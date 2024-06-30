import express from 'express'
import cors from 'cors'


const router=express.Router();
router.use(cors());

router.post("/register",(req,res)=>{
    console.log(req.body);
  
})


export default router;