var express = require('express');
var bodyParser = require('body-parser');
const config = require('./config/config');

var app = express();
var port = process.env.PORT || 3977;

//cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function() {
    console.log(`Express server port ${ port }:`, 'online');
});

// Load Routes
var checkOutRoutes = require('./routes/checkout');

// Base Routes
app.use('/checkout', checkOutRoutes);

app.get('/test', function(req, res) {
    res.send('Server works!');
})

module.exports = app;