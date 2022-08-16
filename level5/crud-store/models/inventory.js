const mongoose = require('mongoose')
const schema = mongoose.schema

const inventorySchema = new mongoose.Schema({
    item: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true}
})

module.exports = mongoose.model("Inventory", inventorySchema)