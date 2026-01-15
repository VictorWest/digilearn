import mongoose from "mongoose";

export async function connectDB() {
    const uri = process.env.MONGODB_URI!

    try {
        await mongoose.connect(uri)
        console.log("Mongoose connected")
    } catch (error) {
        console.log(error)
    }
}
