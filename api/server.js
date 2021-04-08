const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors())



server.get('/', (req,res) => {
  res.send(`
    <h1>Welcome to nothing</h1>
    <p>Enjoy the stay</p>
    <h6>Check out the endpoints</h6>
  `)
})




module.exports = server