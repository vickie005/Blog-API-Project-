const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.autorization;

    if (!authHeader || !authHeader.startsWith(Bearer)) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(404).json({ message: 'Invalid token' });
    }
};

module.exports = authMiddleware;