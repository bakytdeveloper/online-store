// server/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();


const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ message: 'Unauthorized: Invalid token.' });
    }
};


const authorizeUser = (roles) => {
    return (req, res, next) => {
        const { role } = req.user;

        if (!roles.includes(role)) {
            return res.status(403).json({ message: 'Forbidden: Insufficient permissions.' });
        }

        next();
    };
};



module.exports = { authenticateUser, authorizeUser };
