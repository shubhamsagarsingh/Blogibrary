const mongoose = require('mongoose')
const { Schema, model } = mongoose




const productSchema = new Schema({
    name: String,
    price: Number,
    category: String
})




module.exports = new model('Product', productSchema)