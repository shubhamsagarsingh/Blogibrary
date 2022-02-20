const mongoose = require('mongoose')
const { Schema, model } = mongoose




const todoSchema = new Schema({
    title: String,
    description: String
})




module.exports = new model('Todo', todoSchema)