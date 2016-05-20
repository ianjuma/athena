'use strict';

var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT);


exports.voice = function(req, res) {
  console.log(req.body);

  var destinationNumber = req.body.destinationNumber;

  var response = "<Response><Say> Hi, I'm testing this service </Say></Response>"
  var voice = AfricasTalking.VOICE;

  voice.getNumQueuedCalls({ 
    phoneNumbers: destinationNumber 
  })
  .then(function(s){
    console.log(s);
  })
  .catch(function(error){
    console.log(error);
  });

  res.setHeader('Content-Type', 'text/plain');
  res.send( response );
};

