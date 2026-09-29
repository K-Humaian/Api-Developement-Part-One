const express = require('express')
// const { message } = require('statuses')
const router = express.Router()


router.get('/users/:id', (req, res) => {
    const userID = req.params.id
    const filter = req.query.filter
    res.send(`User id: ${userID}, Filter: ${filter}`)
})


router.post('/users', (req, res) => {

    const { name, age } = req.body;
    // Check if name or age is missing or not!
    if (!name) {
        console.log("Name not found!");
        res.status(400).json({
            error: "Name is required!!!"
        })
        return
    }
    else if (!age) {
        console.log("Age not found!");
        res.status(400).json({
            error: "Age is required!!!"
        })
        return
    }
    else {
        const user = { name, age }
        res.status(201).json({
            message: "User created successfully!",
            user: user
        })

        console.log("Sign Up Successful!!")
    }

})


module.exports = router;