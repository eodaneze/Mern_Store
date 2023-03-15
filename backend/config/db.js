import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const connectDB = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL , {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        console.log("Database is connected successfully");
    }
    catch(err){
        console.error(`Error: ${err.message}`);
        process.exit(1)
    }
}

export default connectDB