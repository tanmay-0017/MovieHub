import axios from "axios";

const API_URL = 'http://localhost:3000';

const registerUser = async(userData) => {
    return await axios.post(`${API_URL}/user/register`, userData);
};

const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/user/login`, userData);
        if (response.data.token) {
            localStorage.setItem('token', response.data.token); // Save the token in localStorage
        }
        return response.data;
    } 
    catch (error) {
        throw error.response.data.message || 'Error logging in';
    }
};

const getToken = () => {
    return localStorage.getItem('token');
};

const logoutUser = () => {
    localStorage.removeItem('token');
};

export { registerUser, loginUser, getToken, logoutUser };