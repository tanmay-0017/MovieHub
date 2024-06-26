import express from 'express';
import cors from 'cors';

const app = express()

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }))
app.use(cors())
app.use(express.json());        // to parse JSON bodies

// routes import 

import userRouter from './routes/user.routes.js';
import movieRouter from './routes/movie.routes.js';





// routes declaration 

app.use("/user", userRouter);
app.use("/movie", movieRouter);




export { app }