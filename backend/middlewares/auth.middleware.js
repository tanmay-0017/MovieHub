import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';

const verifyJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
        return res.status(403).send('No token provided');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).send('Invalid token');
        }
        req.userId = decoded.userId;
        next();
    });
};

export { verifyJWT };
