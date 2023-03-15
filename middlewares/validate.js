const { body } = require('express-validator');


const validateUser = [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }).withMessage('length password minimal 6 character'),
]


module.exports = { validateUser }
