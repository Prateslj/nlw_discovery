// Importing required modules
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// Nunjucks (Template Engine) configuration
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

// Server
server
// Receive req.body data
.use(express.urlencoded({ extended: true }))
// Static pages
.use(express.static("public"))
// Routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// Listening port
.listen(5500)