import express from 'express'

let users = [
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
    const userId = parseInt(req.params.id)
    const user = users.find(user => user.id === userId)
    if(!user) {
        return res.json({
            message: "failed",
            errors: [`User id:${req.params.id} not found`]
        })
    }

    res.json({
        message: "success",
        data: [
            user
        ]
    })
})

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const user = users.find(user => user.id === userId)
    if(!user){
        return res.json({
            message: "failed",
            error: [`User id:${req.params.id} not found`]
        })
    }
})

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id)
    const deletedItem = users.find(user => user.id === userId)
    if(!deletedItem) {
        return res.json({
            message: "failed",
            errors: [`User id:${req.params.id} not found`]
        })
    }

    users = users.filter(user => user.id !== userId)
    res.json({
        message: "successs",
        data: [
            deletedItem
        ]
    })
})