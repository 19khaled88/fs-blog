require('express-async-errors')
require('./db')
const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
require('dotenv').config()


const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.json())

const postRouter = require('./routers/post.js')


//root routes
app.use('/api/post',postRouter)



// global error handling
app.use((err, req, res, next)=>{
    res.status(500).json({success:false,error:err.message})
})

const port = process.env.PORT || 8008


app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})