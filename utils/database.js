import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDb is Already Connected !!");
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "prompts_db",
            connectTimeoutMS: 30000, // 30 seconds
            socketTimeoutMS: 30000 // 30 seconds
        })

        isConnected = true;
        console.log('MongoDB Connected !!');
    } catch (error) {
        console.log(error);
    }
}