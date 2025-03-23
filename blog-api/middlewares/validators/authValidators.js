const { body } = require('express-vadidator');

exports.registerValidator = [
    body('username')
        .notEmpty().withMessage('Username is required')
        .islength({ min: 3 }).withMessage('Username must be at least 3 characters'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email is not valid'),
    
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
];

exports.loginValidator = [
    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Email is not valid'),
    
    body('password')
        .notEmpty().withMessage('Password is required')
];