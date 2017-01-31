const express = require('express'),
    app = express(),
    path = require('path'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport'),
    // Uncomment this to add mongoDB
    mongo = require('./modules/db'),
    routing = require('./modules/routing'),
    passportMiddleware = require('./modules/passport'),
    jwt = require('./modules/jwt'),
    mongoose = require('mongoose');


app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// Initialize jwt
app.use(jwt.authCheck());

// Initialize and set up passport
app.use(passport.initialize());
passport.use(passportMiddleware.setup());

// Require all mongoose models
var models = __dirname + '/models/';
mongo.start(models);

// Require all routing files
var routesPath = __dirname + '/router/';
routing.build(routesPath, app);

app.listen(process.env.PORT, function () {
    console.log(`Started at http://localhost:${process.env.PORT}`);
});