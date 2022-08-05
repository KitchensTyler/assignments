const express = require('express')
const app = express()

app.use(express.json())

const items = [
    {
        name: "banana",
        type: "food",
        price: 200,
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
    },{
        name: "soup",
        type: "food",
        price: 300,
    },{
        name: "flour",
        type: "food",
        price: 100,
    }
]


app.get('/', (req, res) => {
    res.send(items)
})

app.get("/search/name", (req, res) => {
    const name = req.query.name
    const filteredItems = items.filter(item => item.name === name)
    res.send(filteredItems)
})

app.listen(9000, () => {
    console.log('the server is running')
})