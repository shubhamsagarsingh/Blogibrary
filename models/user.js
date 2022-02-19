const mongoose = require('mongoose')
const { Schema, model } = mongoose



const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})




module.exports = new model('User', userSchema)