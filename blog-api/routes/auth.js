const express = require('express');
const router = express.Router();
const { registerValidator, loginValidator } = require('../middlewares/validators/authValidator');
const validate = require('../middleware/validators/validate');

router.post('/register', registerValidator, validate, (req, res) => {
    res.status(201).json({ message: 'User registered successfully' });
});

router.post('/login', loginValidator, validate, (req, res) =>{
    
        res.status(200).json({ message: 'Login successful' });
});

module.exports = router;
