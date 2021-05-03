const { check } = require('express-validator')

exports.userRegisterValidator = [
    check('username')
        .not()
        .isEmpty()
        .withMessage('Username is required'),
    check('email')
        .isEmail()
        .withMessage('Must be a valid email address'),
    check('password')
        .isLength({min: 8})
        .withMessage('Password must be at least 8 characters long')


]


// exports.userLoginValidator = [
//     check('username')
//         .not()
//         .isEmpty()
//         .withMessage('Username is required'),
//     check('password')
//         .isLength({min: 8})
//         .withMessage('Password must be at least 8 characters long')


// ]