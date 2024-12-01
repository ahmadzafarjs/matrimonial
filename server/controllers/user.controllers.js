import { apiError, apiResponse } from "../utils/apiResponse.js";
import User from "../schemas/user.schema.js";

export async function register(req, res){
    try {
        const {fullName, email, password} = req.body;

        if (!fullName || !email || !password) {
            throw new Error("Fill all fields")
        }
        
        if (password.length < 6) {
            throw new Error("Password must be 6 characters long")
        }
        
        const checkUser = await User.findOne({email});
        
        if (checkUser) {
            throw new Error("User already exists")
        }

        const user = await User.create({
            fullName,
            email,
            password
        })

        user.password = undefined;

        apiResponse(res, 200, user)
    } catch (error) {
        apiError(res, 500, error.message)
    }
}



export async function login(req, res){
    try {
        const {email, password} = req.body;

        if (!email || !password) {
            throw new Error("Fill all fields")
        }
        
        if (password.length < 6) {
            throw new Error("Password must be 6 characters long")
        }
        
        const checkUser = await User.findOne({email});
        
        if (!checkUser) {
            throw new Error("User not found")
        }
        
        if (checkUser.password !== password) {
            throw new Error("Invalid password")
        }

        checkUser.password = undefined;

        apiResponse(res, 200, checkUser)
    } catch (error) {
        apiError(res, 500, error.message)
    }
}