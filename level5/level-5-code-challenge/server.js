const express = require("express")
const app = express()
const morgan = require("morgan")
const bountyRouter = require("./routes/bountyRouter")

//Middleware for every response
app.use(express.json())
app.use(morgan("dev"))

// Routes
// 1. Set up a route to pull from Routes/bountyRouter.js file (at endpoint "/bounties")
app.use("/bounties", require("./routes/bountyRouter.js"))

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:3001" ); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
//     next();
//   });

// Server Listen
app.listen(9000, () =>{
    console.log("The server is running on port 9000")
})