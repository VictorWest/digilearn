import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        unique: true,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    savedCourses: [String] // store by courseId
}, { timestamps: true })

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User