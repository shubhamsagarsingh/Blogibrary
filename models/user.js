const mongoose = require('mongoose')
const { Schema, model } = mongoose
const bcryptjs = require('bcryptjs')



const userSchema = new Schema({
    name: String,
    email: String,
    password: String
})



userSchema.pre('save', async function(next){
    if(this.isModified('password')){
        this.password = await bcryptjs.hash(this.password, 10)
    }
    next()
})



module.exports = new model('User', userSchema)