import axios from 'axios';
import { getToken } from './authService';

const API_URL = 'http://localhost:5000'; // Update with your backend URL

const searchMovie = async (title) => {
    try {
        const response = await axios.post(`${API_URL}/search`, { title }, {
            headers: {
                'Authorization': `Bearer ${getToken()}`
            }
        });
        return response.data;
    } catch (error) {
        throw error.response.data.message || 'Error searching movie';
    }
};

export { searchMovie }
