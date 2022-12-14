const express = require('express');
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const errorHandler = require('./middleware/error');

// Router file

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body Parser
app.use(express.json());

app.use(cors());
app.use(express.static('public'));

// Mount routers
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(errorHandler);

module.exports = app;