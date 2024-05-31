import React, { useState } from 'react';
import axios from 'axios';
import { getToken } from '../services/authService';

const SearchMovie = () => {
    const [title, setTitle] = useState('');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const token = getToken(); // Get the token from localStorage
            const response = await axios.post(
                'http://localhost:3000/movie/search',
                { title },
                {
                    headers: {
                        'Authorization': `Bearer ${token}`, // Include the token in the headers
                        'Content-Type': 'application/json'
                    }
                }
            );
            setMovies(response.data.Search || []);
        } catch (err) {
            setError(err.response?.data?.message || 'Error searching for movies');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Search Movies</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Movie Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>Search</button>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <div>
                {movies.map((movie) => (
                    <div key={movie.imdbID}>
                        <h3>{movie.Title}</h3>
                        <p>{movie.Year}</p>
                        <img src={movie.Poster} alt={movie.Title} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchMovie;
