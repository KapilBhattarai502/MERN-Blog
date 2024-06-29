import express from 'express'
import cors from 'cors'

const router=express.Router();

router.get("/test",(req,res)=>{
    res.json('test ok');
})


export default router;