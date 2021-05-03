const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        maxlength: 50,
        unique: true,
        index: true,
        lowerCase: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        index: true,
        lowerCase: true
    },
    profile: {
        type: String,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    salt: {
        type: String
    },
    resetPasswordLink: {
        data: String,
        default: ''
    }
}, {timestamps: true})




module.exports = mongoose.model('User', UserSchema)