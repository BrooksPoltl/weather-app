require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const server = express();
const weather = require('./api/routes/weatherRouter');
const auth = require('./api/routes/authRouter');

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/', weather);
server.use('/api',auth);

server.get ('/', (req, res) => {
  res.send ();
});

module.exports = server;