import { asyncHandler } from "../utils/asyncHandler.js";
import axios from 'axios';

const searchMovie = asyncHandler(async (req, res) => {
    const { title } = req.query;
    const apiKey = process.env.OMDB_API_KEY;

    if (!title) {
        return res.status(400).send('Title query parameter is required');
    }

    const response = await axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=${title}`);
    res.send(response.data);
});

export { searchMovie };
