
const express = require('express')
const app = express()
const {v4: uuidv4} = require('uuid')

app.use(express.json())

app.use("/bounties", require("./routes/bountyRouter.js"))

app.listen(9000, () => {
    console.log("the server is running")
})