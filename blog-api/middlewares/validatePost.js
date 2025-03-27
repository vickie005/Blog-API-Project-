const { body, validationResult } = require('express-validator');

exports.validatePost = [
    body('title').notEmpty().withMessage('Title is required'),
    body('content').notEmpty().withMessage('Content is required'),
    body('category').optional().isString().withMessage('Category must be a string'),
    body('tags').optional().isArray().withMessage('Tags must be an array'),

    (req, res, next) => {
        const errors = validationResult(req);
        if (!errrors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];