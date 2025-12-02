import express from 'express'

const users = [
    { id: 1, name: "Antony" },
    { id: 2, name: "Bill" }
]
let userId = 3

const app = express()
const port = 3000

app.get('/', (_, res) => {
    res.send('Hello, World!')
})

app.listen(port, () => {
    console.log("Server is running on http://localhost:3000")
})

app.get('/users', (_, res) => {
    res.json({
        message: "success",
        data: [
            ...users
        ]
    })
})

app.post('/users', (_, res) => {
    users.push({
        id: userId,
        name: "new user"
    })
    userId++

    res.json({
        message: "success",
        data: [
            ...users
        ]
    })
})

app.get('/users/:id', (req, res) => {
    res.json({
        message: "hold",
        data: [
            req.params.id
        ]
    })
})

app.put('/users/:id', (req, res) => {
    res.json({
        message: "hold",
        data: [
            req.params.id
        ]
    })
})

app.delete('/users/:id', (req, res) => {
    res.json({
        message: "hold",
        data: [
            req.params.id
        ]
    })
})