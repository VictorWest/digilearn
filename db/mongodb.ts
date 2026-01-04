import mongoose from "mongoose";

export async function connectDB() {
    const uri = "mongodb+srv://mywondervic_db_user:f3MccZIsnAPt1p97@cluster0.xulpocq.mongodb.net/"
    await mongoose.connect(uri)
    console.log("Mongoose connected")
}
