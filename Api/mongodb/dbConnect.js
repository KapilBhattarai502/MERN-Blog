import  mongoose  from "mongoose";

const dbConnect=async()=>{
    try {
        await mongoose.connect('mongodb+srv://kapilbhattarai502:dob205807@trainingdatabase.jyqv7zv.mongodb.net/');
        console.log("DB Connected Sucessfully")
        
    } catch (error) {
        console.log("Problem in connecting ...")
        console.log(error);
    }
}

export default dbConnect;