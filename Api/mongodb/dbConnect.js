import  mongoose  from "mongoose";
import 'dotenv/config'



const dbConnect=async()=>{
    try {
        await mongoose.connect(`${process.env.DB_URL}`);
        
        console.log("DB Connected Sucessfully")
        
    } catch (error) {
        console.log("Problem in connecting ...")
        console.log(error);
    }
}

export default dbConnect;