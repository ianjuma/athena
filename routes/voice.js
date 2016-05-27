'use strict';

var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT);


exports.voice = function(req, res) {
  console.log(req.body);
  var recordingUrl = req.body.recordingUrl;

  var destinationNumber = req.body.destinationNumber;

  var response = '<Response>';
  response += '<Record finishOnKey="#" maxLength="10" trimSilence="true" playBeep="true">';
  response += "<Say> Ask me a question, I'll be happy to respond.</Say>";
  response += '</Record>';
  response += '</Response>';

  var voice = AfricasTalking.VOICE;

  voice.getNumQueuedCalls({
    phoneNumbers: destinationNumber 
  })
  .then(function(s) {
    console.log(s);
  })
  .catch(function(error) {
    console.log(error);
  });

  res.setHeader('Content-Type', 'text/plain');
  res.send( response );
};

