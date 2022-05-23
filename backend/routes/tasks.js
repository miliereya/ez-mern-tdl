const router = require('express').Router()
let Task = require('../models/tasks.model')

router.route('/').get((req, res) => {
    const username = req.query.username
    Task.find({username})
       .then(tasks => res.json(tasks))
       .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/delete:id').delete((req, res)=> {
    const id = req.params.id
    Task.findByIdAndDelete(id)
        .then(() => res.json('Exercise deleted.'))
})

router.route('/add').post((req, res) => {
    const username = req.body.username
    const task = req.body.task
    const description = req.body.description
    const date = req.body.date

    const newTask = new Task({
        username,
        task,
        description,
        date,
    })
    
    newTask.save()
        .then(()=> res.json({status: 'Task added'}))
        .catch(err => res.status(400).json('Error: ' + err))

})

router.route('/:id').delete((req, res)=>{
    Task.findByIdAndDelete(req.params.id)
    .then(() => res.json("Mern deleted"))
    .catch(err => res.status(400).json('Error ' + err))
})



module.exports = router