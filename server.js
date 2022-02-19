const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { connect } = mongoose
require('dotenv').config()
const authRoutes = require('./routes/auth')



app.use(express.json())
app.use('/api', authRoutes)



const database = process.env.DATABASE
const port = process.env.PORT || 8000



connect(database)
.then(() => console.log('Database Connected'))
.catch((error) => console.log(error))



app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})