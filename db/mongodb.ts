import mongoose from "mongoose";

export async function connectDB() {
    const uri = ".mongodb.net/"
    await mongoose.connect(uri)
    console.log("Mongoose connected")
}
