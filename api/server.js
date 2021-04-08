const express = require('express')
const cors = require('cors')
const path = require('path')
const userRouter = require('./users/users-router')

const server = express()


server.use(cors())
server.use(express.json())
server.use(express.static(path.join(__dirname,"../client/build")))


server.use('/api/users', userRouter)


server.use('/api/', (_,res) => {
  res.json({
    data: "api is up",
    intro: `<h1>Welcome to nothing</h1><p>Enjoy the stay</p><h6>Check out the endpoints</h6>`
  })
})



module.exports = server