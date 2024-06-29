import express from 'express'
import registerRoute from "./registerApi.js"
import cors from 'cors'

const app=express();

app.use(express.json());
app.use(registerRoute);
app.use(cors());




const port=8000;



app.listen(port,()=>{
    console.log(`App is listening to port no ${port}`);
})



