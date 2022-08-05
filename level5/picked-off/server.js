const express =  require('express')
const app = express()

app.use(express.json())

app.use("/items", (req, res, next) => {
    console.log('items middleware was executed')
    next()
})

app.use("/items", (req, res, next) => {
    req.body = { name: "rick"}
    next()
})

app.get("/items", (req, res, next) => {
    res.send(req.body)
})

app.listen(9000, () => {
    console.log('server is running')
})