'use strict';

var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT);

var Houndify = require('houndify').Houndify;

var client = new Houndify({
  auth: {
    clientId: 'KS3xVzZ3e1LYKPYpje8BVA==',
      clientKey: 'unUgmQ4ZFvjk4LeJVs5oa16H7V-O4DTbDpJ1-KCSnKpVPu6lP59Y4gyTufdn7_EkGHj8EZGzMIAcLd4F8l-GdA==',
      userId: 'ijuma@africastalking.com'
  }
});


exports.receiveSms = function(req, res) {

  var from_   = req.body.from;
  var message = req.body.text;
  var to      = req.body.to;
  var date    = req.body.date;
  var id      = req.body.id;

  console.log(from_, to, message, date, id);

  var sms     = AfricasTalking.SMS;
  var voice   = AfricasTalking.VOICE;

  client.query(message, function(error, resp) {

    var command = resp[0].raw.CommandKind;
    var toSend  = resp[0].raw.SpokenResponse;

    console.log(command, toSend);

    var opts = { 'to': from_, 'message': command + ' -> ' + toSend };

    sms.send(opts)
    .then(function(s) {
      console.log(s);
    })
    .catch(function (error) {
      console.log(error);
    });

  });

  res.setHeader('Content-Type', 'application/json');
  res.send( { 'Response': 'OK 200' } );
}
