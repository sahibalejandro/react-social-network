const express = require('express')
const { check, validationResult } = require('express-validator/check');
const router = express.Router()

router.post('/api/users', [
    check('email').isEmail().withMessage('Invalid email address'),
    check('password').not().isEmpty().withMessage('Password is required'),
], (req, res) => {
    const errors = validationResult(req);

    if (! errors.isEmpty()) {
        return res.status(422).json({errors: errors.mapped()});
    }

    res.status(201).json({success: true, user: req.body})
})

module.exports = router
