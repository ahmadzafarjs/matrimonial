import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        // required: true
    },
    education: {
        type: String,
        // required: true
    },
    height: {
        type: Number,
        // required: true
    },
    job: {
        type: Boolean,
        // required: true
    },
});

const User = mongoose.model("User", userSchema);

export default User;