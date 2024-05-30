import express from 'express';
import { searchMovie } from '../controllers/movie.controller.js';
// const jwt = require('jsonwebtoken');
import jwt from 'jsonwebtoken';
import {verifyJWT} from "../middlewares/auth.middleware.js";


const app = express();


// Routes 

app.route('/search').post(verifyJWT, searchMovie);




export default app;
