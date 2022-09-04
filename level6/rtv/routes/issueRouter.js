const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')

issueRouter.get("/", (req, res, next) => {
    Issue.find((err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issueRouter.get("/user", (req, res, next) => {
    Issue.find({ user: req.auth._id}, (err, issues) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(issues)
    })
})

issueRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newIssue = new Issue(req.body)
    newIssue.save((err, savedIssue) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedIssue)
    })
})

issueRouter.delete("/:issueId", (req, res, next) => {
    Issue.findOneAndDelete(
        { _id: req.params.issueId, user: req.auth._id }, 
        (err, deletedIssue) => {
            if(err){
                res.status(500)
                return next(err)    
            }
            return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
        }
    )
})

issueRouter.put("/upvote/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        { _id: req.params.issueId, user: req.auth._id },
        { $addToSet: { likes: req.auth._id }, $pull: {dislikes: req.auth._id} },
        { new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
    )
})

issueRouter.put("/downvote/:issueId", (req, res, next) => {
    Issue.findByIdAndUpdate(
        { _id: req.params.issueId, user: req.auth._id },
        { $addToSet: { dislikes: req.auth._id }, $pull: { likes: req.auth._id} },
        { new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
    )
})

issueRouter.put("/:issueId", (req, res, next ) => {
    Issue.findOneAndUpdate(
        { _id: req.params.issueId, user: req.auth._id},
        req.body,
        { new: true},
        (err, updatedIssue) => {
            if(err){
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updatedIssue)
        }
    )
})

module.exports = issueRouter