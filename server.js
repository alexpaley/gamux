var express = require('express'),
    http = require('http'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    csrf = require('csurf'),
    nib = require('nib'),
    _ = require('underscore'),
    port = 8080;

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    
// parse application/json
app.use(bodyParser.json())

app.use(cookieParser());

/*
var csrfValue = function(req) {
    var token = (req.body && req.body._csrf)
        || (req.query && req.query._csrf)
        || (req.headers['x-csrf-token'])
        || (req.headers['x-xsrf-token']);
    return token;
};
app.use(csrf({value: csrfValue}));
*/

app.use(function (req, res, next) {
    //res.cookie('_csrf', req.csrfToken());

    // for angular.  Angular reads this value automatically if available.
    //res.cookie('XSRF-TOKEN', req.csrfToken());

    next();
});

app.use(express.static(__dirname + '/client/app/'));

// Tell controllers to register the paths they handle with app
_.each(['defaultController', 
        'userController'],
    function(cname) {
        console.log('Registering controller: ' + cname);
        var ctrl = require('./server/controllers/' + cname);
        ctrl.register(app);
    }
);

if(process.env.NODE_ENV === 'development') {
    app.listen(port);
} else {
    app.listen(80, '0.0.0.0');
}

module.exports = app;

