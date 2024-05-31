import React, { useState } from 'react';
import { searchMovie } from '../services/movieService';

const SearchMovie = () => {
    const [title, setTitle] = useState('');
    const [results, setResults] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const data = await searchMovie(title);
            setResults(data.Search);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h2>Search Movie</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Movie Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                <button type="submit" disabled={loading}>Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {results && results.length > 0 && (
                <ul>
                    {results.map((movie) => (
                        <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SearchMovie;
