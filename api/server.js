const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const userRouter = require('./users/users-router')
const mw = require('./middleware/middleware')

const server = express()

server.use(express.json())
server.use(cors())
server.use(helmet())
server.use(mw.logger)
server.use('/api/users', userRouter)

server.use('/api/', (_,res) => {
  res.json({data: "api is up"})
})

server.get('/', (req,res) => {
  res.send(`
    <h1>Welcome to nothing</h1>
    <p>Enjoy the stay</p>
    <h6>Check out the endpoints</h6>
  `)
})




module.exports = server