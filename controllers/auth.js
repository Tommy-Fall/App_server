const User = require('../models/user')
const jwt = require('jsonwebtoken')

// exports.register = (req, res) => {

//     User.findOne({ username: req.body.username }).exec((err, user) => {
//         if (user) {
//             return res.status(400).json({
//                 error: 'Username is taken'
//             })
//         }

//         const { username, email, password } = req.body
//         let profile = `${process.env.CLIENT_URL}/profile/${username}`
//         let NewUser = new User({ username, email, profile, password })
//         NewUser.save((err, success) => {
//             if (err) {
//                 return res.status(400).json({
//                     error: err
//                 })
//             }
//             res.json({
//                 message: 'Registration succesfully'
//             })
//         })

//     })
// }

// exports.login = (req,res)=> {
//     const {username, password} = req.body
//     //check if user exists
//     User.findOne({username}).exec((err,user)=>{
//         if(err || !user){
//             return res.status(400).json({
//                 error: "Username or Password incorrect"
//             })
//         }
//         // authenticate
//         if(!user.authenticate(password)){
//             return res.status(400).json({
//                 error: "Username or Password incorrect"
//             })
//         }

//          //generate a token send to client
//         const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})
//         res.cookie('token', token, {expiresIn: '1d'})
//         const {_id, username, email} = user 
//         return res.json({
//             token,
//             user: {_id, username, email}
//         })
//     })
// }

