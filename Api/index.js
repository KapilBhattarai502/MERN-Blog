import express from 'express'
import registerRoute from "./registerApi.js"
import cors from 'cors'
import dbConnect from './mongodb/dbConnect.js';
import loginRoute from "./loginApi.js"

const app=express();

app.use(express.json());
app.use(cors());
app.use(registerRoute);
app.use(loginRoute);

dbConnect();




const port=8000;



app.listen(port,()=>{
    console.log(`App is listening to port no ${port}`);
})






