require('dotenv').config();
const cors = require('cors');
const helmet = require('helmet');
const express = require('express');
const server = express();
const weather = require('./api/routes/weatherRouter');
const auth = require('./api/routes/authRouter');
const cityData = require('./api/routes/cityDataRouter');

server.use(cors());
server.use(helmet());
server.use(express.json());
server.use('/', weather);
server.use('/api',auth);
server.use('/api', cityData);

server.get ('/', (req, res) => {
  res.send ();
});

module.exports = server;