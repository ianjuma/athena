'use strict';

var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT);
var redis = require("redis"),
    r = redis.createClient();


exports.voice = function(req, res) {
  console.log(req.body);
  var message = "";

  var callerNumber = req.body.callerNumber;

  r.get(callerNumber, function (err, reply) {

    if (!err) {
      message = reply;
    }
  });

  var response = '<Response>';
  response += "<Say>" + message +"</Say>";
  response += '</Response>';

  res.setHeader('Content-Type', 'text/plain');
  res.send( response );
};

