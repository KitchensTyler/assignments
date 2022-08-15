const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')




// bountyRouter.get("/:bountyId", (req, res) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounties._id === bountyId)
//     res.send(foundBounty)
// })

// bountyRouter.get("/search/type", (req, res) => {
//     const type = req.query.type
//     const filteredBounties  = bounties.filter(bounty => bounty.type === type)
//     res.send(filteredBounties)
// })

bountyRouter.get("/", (req, res, next) => { console.log("request sent")
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})
    
//     bountyRouter.post((req, res) => {
//         const newBounty = req.body
//         newBounty._id = uuidv4()
//         bounties.push(newBounty)
//         res.send(newBounty)
//     })


// bountyRouter.delete("/:bountyId", (req, res) => {
//         const bountyId = req.params.bountyId
//         const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
//         bounties.splice(bountyIndex, 1)
//         res.send('deleted')
//     })
// bountyRouter.put("/:bountyId", (req, res) => {
//         const bountyId = req.params.bountyId
//         const updateObject = req.body
//         const bountyIndex = bounties.findindex(bounty => bounty._id === bountyId)
//         const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
//         res.send(updatedBounty)
//     })



module.exports = bountyRouter