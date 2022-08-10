const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const bounties = [
    {fName:"jon", lName:"Doe", living:true , reward:2000, type:"sith", _id: uuidv4() }, 
    {fName: "cal", lName:"job", living: false, reward:50000, type:"jedi", _id: uuidv4() }
]




bountyRouter.route("/")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(newBounty)
    })


bountyRouter.delete("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        bounties.splice(bountyIndex, 1)
        res.send('deleted')
    })
    .put((req, res) => {
        const bountyId = req.params.bountyId
        const updateObject = req.body
        const bountyIndex = bounties.findindex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
        res.send(updatedBounty)
    })



module.exports = bountyRouter