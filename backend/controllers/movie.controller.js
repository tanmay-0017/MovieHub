import { Movie } from "../models/movie.model.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


const searchMovie = asyncHandler(async(req, res) => {
    const { title } = req.query;
    const response = await axios.get(`http://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${title}`);
    res.json(response.data);
})

export {searchMovie}
