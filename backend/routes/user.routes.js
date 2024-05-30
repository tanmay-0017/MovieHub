import express from 'express';
import {loginUser, registerUser} from '../controllers/user.controller.js'


const app = express();


// Routes 

app.route("/register").post(registerUser);
app.route("/login").post(loginUser);




export default app;