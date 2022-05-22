const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mernSchema = new Schema({
    username: { type: String, required: true},
    description: {type: String, required: true},
    duration: {type: Number, required: true},
    date: {type: Date, required: true}, 
}, {
    timestamps: true
})

const Mern = mongoose.model('Mern', mernSchema)

module.exports = Mern