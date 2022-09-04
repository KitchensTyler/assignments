const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require("express-jwt")

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(`mongodb+srv://tylerkitchens:tacomuffin@cluster0.xjt0phz.mongodb.net/?retryWrites=true&w=majority`, () => console.log('connected to database'))

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }))
app.use('/api/user', require('./routes/userRouter.js'))
app.use('/api/issue', require('./routes/issueRouter.js'))
app.use('/api/issue/comments', require('./routes/commentRouter.js'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000" ); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
  });

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnathorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(9000, () => {
    console.log('Server is running on local port 9000')
})