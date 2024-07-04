import mongoose from "mongoose";
import configs from '@/src/utils/config'

export async function connectMongoDB() {
    try {
        await mongoose.connect(
            configs.mongodbUrl
        );
        console.log("Connect to MongoDB successfully!");
    } catch (error: any) {
        console.log("Error Conecction to MongoDB", error.messsage)
    }
}