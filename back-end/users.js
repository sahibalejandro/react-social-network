const express = require('express');
const { check, validationResult } = require('express-validator/check');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const router = express.Router();

/*
 * Validation rules to create a new user
 */
const validation = [
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').not().isEmpty().withMessage('Password is required'),
];

/*
 * Create a new user.
 */
router.post('/api/users', validation, async (req, res) => {
    const errors = validationResult(req);

    if (! errors.isEmpty()) {
        return res.status(422).json({errors: errors.mapped()});
    }

    // Hash password
    const passwordHash = await bcrypt.hash(req.body.password, 10)

    // Create user in database
    const user = await User.create({
        email: req.body.email,
        password: passwordHash,
    });

    res.status(201).json({user});
})

module.exports = router;