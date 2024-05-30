import express from 'express';
import {loginUser, registerUser} from '../controllers/user.controller.js'


const app = express();

// Middleware
app.use(express.json());


// Routes 

app.route("/register").post(registerUser);
app.route("/login").post(loginUser);




export default app;