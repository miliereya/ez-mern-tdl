 const router = require('express').Router()
 let User = require('../models/user.model')

 router.route('/').get((req, res) => {
    const username = req.query.username
    User.find({username})
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err))
 })

 router.route('/add').post((req, res) => {
    const { username, password } = req.body
    //console.log(username, password)
    console.log(req.body)

    const newUser = new User({
        username,
        password
    })

    newUser.save()
        .then(()=> res.json('User added'))
        .catch(err => res.status(400).json('Error: ' + err))

 })

 module.exports = router