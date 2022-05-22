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

    const bcrypt = require('bcrypt');
    
    const salt = bcrypt.genSaltSync(10);
    const lightHash = bcrypt.hashSync(username, salt)

    const newUser = new User({
        username,
        password,
        lightHash
    })

    newUser.save()
        .then(()=> res.json(lightHash))
        .catch(err => res.status(400).json('Error: ' + err))

 })

 router.route('/hashlog').get((req, res) => {
    const lightHash = req.query.lightHash
    User.find({lightHash})
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error ' + err))
 })

 router.route('/log').post((req, res) => {
    const { username, password } = req.body
    
    const bcrypt = require('bcrypt');
    
    const salt = bcrypt.genSaltSync(10);
    const lightHash = bcrypt.hashSync(username, salt)

    User.find({ username: username, password: password })
        .then(user => res.json(lightHash))
        .catch(err => res.status(400).json('Error '+ err))
 })

 module.exports = router