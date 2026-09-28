const express = require('express')
const router = express.Router()


router.get('/users/:id', (req, res) => {
    const userID = req.params.id
    const filter = req.query.filter
    res.send(`User id: ${userID}, Filter: ${filter}`)
})


module.exports = router;