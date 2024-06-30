import  mongoose  from "mongoose";

const dbConnect=async()=>{
    try {
        await mongoose.connect('mongodb+srv://kapilbhattarai502:dob205807@cluster0.ssdqlio.mongodb.net/registerUser?retryWrites=true&w=majority&appName=Cluster0');
        
        console.log("DB Connected Sucessfully")
        
    } catch (error) {
        console.log("Problem in connecting ...")
        console.log(error);
    }
}

export default dbConnect;