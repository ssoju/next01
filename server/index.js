import Nuxt from 'nuxt'
import express from 'express'
import apps from 'express'
import http from 'http'
import socketIo from 'socket.io'
import bodyParser from 'body-parser'

import api from './api'

// Create express router
const router = express.Router()

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

router.use((req, res, next) => {
    Object.setPrototypeOf(req, app.request)
    Object.setPrototypeOf(res, app.response)
    req.res = res
    res.req = req
    next()
})

// socket.io
// const http = require('http').Server(apps)
const server = http.createServer(apps)
const io = socketIo(server)
const port = process.env.PORT || '8000'
const host = process.env.HOST || 'localhost'

app.set('port', port)

// Import API Routes
app.use('/api', api)
io.on('connection', (socket) => {
  console.log('a user connected : ' + socket.id)
  socket.on('disconnect', () => {
    console.log('user disconnected : ' + socket.id)
  })
  socket.on('add-list', (msg) => {
    socket.emit('now-playlist', msg)
  })
})


app.use('/api', api)

async function start () {
  // Import and Set Nuxt.js options
  let config = require('../nuxt.config.js')
  config.dev = !(process.env.NODE_ENV === 'production')
  // Instanciate nuxt.js
  const nuxt = await new Nuxt(config)
  // Add nuxt.js middleware
  app.use(nuxt.render)
  // Build in development
  if (config.dev) {
    // console.log(config.dev)
    try {
      await nuxt.build()
    } catch (error) {
      console.error(error) // eslint-disable-line no-console
      process.exit(1)
    }
  }
  // Listen the server
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
