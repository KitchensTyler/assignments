const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }, 
    datePosted: {
        type: Date,
        default: Date.now
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }],
})

module.exports = mongoose.model("Issue", issueSchema)