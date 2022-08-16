const mongoose = require('mongoose')
const schema = mongoose.schema

const bountySchema = new mongoose.Schema({
    fName: {type: String,
            required: true},

    type: {
        type: String,
        required: true},

    bounty: {type: Number,
            required: false}
            
})

module.exports = mongoose.model("Bounty", bountySchema)