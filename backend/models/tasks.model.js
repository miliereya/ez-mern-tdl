const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    username: { type: String, required: true},
    task: {type: String, required: true},
    description: {type: String, required: true},
    date: {type: String, required: true}, 
}, {
    timestamps: true
})

const Task = mongoose.model('Task', taskSchema)

module.exports = Task