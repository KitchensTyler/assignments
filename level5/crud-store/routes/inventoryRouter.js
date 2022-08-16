const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory.js')
const mongoose = require('mongoose')

inventoryRouter.get("/", (req, res, next) => { console.log("request sent")
    Inventory.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})

inventoryRouter.get("/:inventoryId", (req, res, next) => { console.log("request sent")
    Inventory.find((err, inventory) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(inventory)
    })
})


inventoryRouter.post("/", (req, res, next) => {
    const newItem = new Inventory(req.body)
    newItem.save((err, savedInventory) => {
        if(err){
            res.status(500)
            return next (err)
        }
        return res.status(201).send(savedInventory)
    })
})

inventoryRouter.delete("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndDelete({_id: req.params.inventoryId }, (err, deletedItem) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send('deleted item')
    })
})

inventoryRouter.put("/:inventoryId", (req, res, next) => {
    Inventory.findOneAndUpdate(
        {_id: req.params.inventoryId },
        req.body, 
        { new : true},
        (err, updatedInventory) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(201).sendUpdatedInventory
        }
    )
})

module.exports = inventoryRouter