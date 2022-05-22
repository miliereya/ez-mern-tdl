const router = require('express').Router()
let Mern = require('../models/mern.model')

router.route('/').get((req, res) => {
    Mern.find()
       .then(mern => res.json(mern))
       .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newMern = new Mern({
        username,
        description,
        duration,
        date,
    })

    newMern.save()
        .then(()=> res.json('Mern added'))
        .catch(err => res.status(400).json('Error: ' + err))

})

router.route('/:id').get((req, res)=>{
    Mern.findById(req.params.id)
    .then(mern => res.json(mern))
    .catch(err => res.status(400).json('Error ' + err))
})

router.route('/:id').delete((req, res)=>{
    Mern.findByIdAndDelete(req.params.id)
    .then(() => res.json("Mern deleted"))
    .catch(err => res.status(400).json('Error ' + err))
})

router.route('/update/:id').post((req, res)=>{
    Mern.findById(req.params.id)
    .then(mern => {
        mern.username =  req.body.username
        mern.description = req.body.description
        mern.duration = req.body.duration
        mern.date = req.body.date

        mern.save()
            .then(() => res.json('Mern updated!'))
            .catch(err => res.status(400).json('Error ' + err))
    })
    .catch(err => res.status(400).json('Error ' + err))
})

module.exports = router