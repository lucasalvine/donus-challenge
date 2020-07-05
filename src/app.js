require('dotenv').config({
  path: process.env.NODE_ENV == "test" ? ".env.test" : ".env"
});

const express = require('express');
const cors = require('cors');
const routes = require('./routes');

require('./database');

class App {
  constructor() {
    this.server = express();

    this.routes();
  }

  routes() {
    this.server.use(cors());
    this.server.use(express.json());
    this.server.use(routes);
  }
}

module.exports = new App().server;