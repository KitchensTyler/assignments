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
    
    bountyRouter.post("/", (req, res, next) => {
     const newBounty = new Bounty(req.body)
     newBounty.save((err, savedBounty) => {
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(201).send(savedBounty)
     })
    })

bountyRouter.delete("/:bountyId", (req, res, next) => {
     Bounty.findOneAndDelete({ _id: req.params.bountyId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send('Deleted item')
     })
    })
    
bountyRouter.put("/:bountyId", (req, res, next) => {
       Bounty.findOneAndUpdate(
        {_id: req.params.bountyId },
        req.body, 
        { new : true}, 
        (err, updatedBounty) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).sendUpdatedBounty
        }
       )
    })



module.exports = bountyRouter