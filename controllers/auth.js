const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')





exports.Signup = (req, res) => {
    const user = new User(req.body)

    user.save()
    .then((data) => {
        res.send(data)
    })
    .catch((error) => console.log(error))
}


exports.Signin = async(req, res) => {
    const { email, password } = req.body
    
    const user = await User.findOne({email: email})
    if(!user) {return res.send('User not found')}
    if(password === '') {return res.send('Please provide password')}
    
    const passwordCheck = await bcryptjs.compare(password, user.password)
    if(!passwordCheck){return res.send('Invalid Credentials')}
        
    const token = await jwt.sign({_id: user._id}, 'secret')
    res.cookie('token', token)
    res.send('Signin Successful')    
}