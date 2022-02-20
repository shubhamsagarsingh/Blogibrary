const mongoose = require('mongoose')
const { Schema, model } = mongoose




const articleSchema = new Schema({
    name: String
})




module.exports = new model('Article', articleSchema)