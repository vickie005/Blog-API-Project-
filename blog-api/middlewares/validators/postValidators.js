const { body } = require('express-validator');

exports.createPostValidator = [
    body('tittle')
        .notEmpty().withMessage('Title is required')
        .isLength({ min: 5 }).withMessage('Tittle must be at least 5 characters'),
    
    body('content')
        .notEmpty().withMessage('Content is required')
        .isLength({ min: 20 }).withMessage('Content must be at least 20 characters'),
    
    body('author')
        .notEmpty().withMessage('Author is required')
];