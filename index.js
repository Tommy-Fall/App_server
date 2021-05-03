const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
// const mongoose = require('mongoose')
// require('dotenv').config()

//app
const app = express()


//bring routes
const blogRoutes = require('./routes/blog')
// const authRoutes = require('./routes/auth')

//db
// mongoose
//     .connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true})
//     .then(()=>console.log('DB connected'))

//middlewares
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cookieParser())

//cors
if(process.env.NODE_ENV == 'development'){
    app.use(cors({origin: process.env.CLIENT_URL}))
}

//routes middleware
app.use('/api',blogRoutes)
// app.use('/api',authRoutes)




// port
const port = process.env.PORT
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})