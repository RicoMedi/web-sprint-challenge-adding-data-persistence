// build your server here and require it from index.js
const express = require("express");
const server = express();
const projectRouter= require('./project/router');
const resourceRouter= require('./resource/router');

server.use(express.json());


server.use('/api/project', projectRouter )
server.use('/api/resource', resourceRouter)

server.use("*", (req, res) => {
  res.json({ api: "up" });
});

server.use((err, req, res, next)=>{ //eslint-disable-line
  res.status(500).json({
    customMessage:'Something really bad happened',
    message:err.message,
    stack: err.stack
  })
})

module.exports = server;