const express = require('express')
const router = express.Router()
const User = require('../models/user')



router.get('/', (req, res) => {
    res.send('hello node')
})

router.post('/signup', (req, res) => {
    const user = new User(req.body)

    user.save()
    .then((data) => {
        res.send(data)
    })
    .catch((error) => console.log(error))
})



module.exports = router