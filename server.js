require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const server = express();
const weather = require('./api/routes/weatherRouter');

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/', weather);

server.get ('/', (req, res) => {
  res.send ();
});

module.exports = server;