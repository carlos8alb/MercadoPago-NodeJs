'use strict'

var express = require('express');
var CheckOutController = require('../controllers/checkout');

var app = express();

var app = express.Router();


// USING MIDDLEWARE
app.post('/create', CheckOutController.create);
app.post('/webhook', CheckOutController.webhook);

module.exports = app;