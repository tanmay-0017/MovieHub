import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";


const registerUser = asyncHandler( async (req, res) => {

    const {username, password} = req.body;

    if ([username, password].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }
    
    const existingUser = User.findOne({username})
    
    if (existingUser){
        throw new error(409, "User with username already exists")
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username: username.toLowerCase(),
        password: hashedPassword
    })

    await user.save();

    res.status(200).send(user);

})



const loginUser = asyncHandler(async(req, res) => {
    const {username, password} = req.body;

    if (!username) {
        throw new error("username is required");
    }

    const user = User.findOne({username});
    if (!user) {
        throw new error("User does not exist")
    }

    if (user && await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({
            userId: user._id
        }, process.env.JWT_SECRET);
        res.send(token);
    }
    else {
        res.status(401).send('Invalid credentials');
    }

    // const isPasswordValid = await user.isPasswordCorrect(password);

    // if (!isPasswordValid){
    //     throw new error("Invalid user credentials")
    // }

    // const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

})

export {registerUser, loginUser}