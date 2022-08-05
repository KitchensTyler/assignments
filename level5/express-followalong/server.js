const express = require('express')
const app = express()


app.use(express.json())


const movies = [
    {title: "die hard", genre: "action"},
    {title: "star wars", genre: "fantasy"},
    {title: "lion king", genre: "fantasy"},
    {title: "friday the 13th", genre: "horror"},
]


app.get('/movies', (req, res) => {
    res.send(movies)
})

app.post("/movies", (req, res) => {
   const newMovie = req.body
    movies.push(newMovie)
    res.send('added successfully')
})

app.listen(9000, () => {
    console.log("the server is running on port 9000")
})

