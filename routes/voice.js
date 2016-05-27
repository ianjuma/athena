'use strict';

var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT);
var redis = require("redis"),
    r = redis.createClient();


exports.voice = function(req, res) {
  console.log(req.body);
  var message = "";

  var callerNumber = req.body.callerNumber; // return +88888888

  console.log(callerNumber);

  r.get(callerNumber, function (err, reply) {
    message = reply;
    
    console.log(message);

    var response = "<Response><Say>" + message + "</Say></Response>";

  	res.setHeader('Content-Type', 'text/plain');
  	res.send( response );
  });
  
};

