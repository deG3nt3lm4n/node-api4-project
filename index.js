const dotenv = require('dotenv').config()

const server = require('./api/server')

const PORT = process.env.PORT || 3001

server.listen(PORT, () => {
  console.log('listing on port: ', PORT)
})