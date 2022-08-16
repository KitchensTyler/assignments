
const morgan = require('morgan')
const express = require('express')
const app = express()
const mongoose = require('mongoose')

require('dotenv').config()
app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(`mongodb+srv://tylerkitchens:${process.env.MONGO_PW}@cluster0.xjt0phz.mongodb.net/inventory?retryWrites=true&w=majority`, () => console.log('connected to database'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000" ); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    next();
  });

app.use("/inventory", require("./routes/inventoryRouter.js"))

app.use((err, req, res, next) => {
    console.log(err)
})
    
app.listen(9000, () => {
    console.log("the server is running")
    })
        