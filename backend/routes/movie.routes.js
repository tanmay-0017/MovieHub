import express from 'express';
import { Movie } from '../models/movie.model';
const axios = require('axios');
const jwt = require('jsonwebtoken');


const app = express();

app.use((req, res, next) => {
    const token = req.headers['authorization'];
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
          return res.status(403).send('Invalid token');
        } else {
          req.userId = decoded.userId;
          next();
        }
      });
    } else {
      res.status(403).send('No token provided');
    }
});


// Routes 

app.route('/search').post(searchMovie);




export default app;