const express = require('express')
const todoRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const todos = [
    {
        name: "Trash",
        description: "Take out the trash",
        imgUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Dishes",
        description: "Load the dishwasher",
        imgUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "Gamer Time",
        description: "pub stomp noobs",
        imgUrl: "http://www.myimage....",
        completed: true,
        _id: uuidv4()
    }, 
]


todoRouter.route("/")
   .get((req, res) => {
        res.send(todos)
    })
    .post((req, res) => {
        const newTodo = req.body
        newTodo._id = uuidv4()
        todos.push(newTodo)
        res.send(`added ${newTodo.name} to database`)
    })


todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send('deleted')
})
todoRouter.put("/:todoId", (req, res) => {
        const todoId = req.params.todoId
        const updateObject = req.body
        const todoIndex = todos.findIndex( todo => todo._id === todoId)
        const updatedTodo = Object.assign(todos[todoIndex],  updateObject)
        res.send(updatedTodo)
    })

todoRouter.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})




module.exports = todoRouter