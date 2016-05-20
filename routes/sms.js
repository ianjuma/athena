'use strict';

var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT);


exports.receiveSms = function(req, res) {

  var from_   = req.body.from;
  var message = req.body.text;
  var to      = req.body.to;
  var date    = req.body.date;
  var id      = req.body.id;

  console.log(from_, to, message, date, id);

  var sms     = AfricasTalking.SMS;
  var voice   = AfricasTalking.VOICE;
  var payment = AfricasTalking.PAYMENT;

  /*
  voice.call({
    callFrom: '+254711082306',
    callTo: from_ 
  }).then(function(s) {
    console.log(s);
  }).catch(function(error){
    console.log(error);
  });
  */
  payment.checkOut({
    phoneNumber  : from_,
    productName  : 'PaymentAiri',
    currencyCode : 'KES',
    metadata     : { id: 'A_35435454634654' },
    amount       : 2000
  }).then(function(s) {
    console.log(s);
  })
  .catch(function(error){
    console.log(error);
  });

  var opts = { to: from_, message: 'Hi, received - ' + message };
/*
  sms.send(opts)
	    .then(function(s) {
	    	console.log(s);
	    })
	    .catch(function (error) {
	    	console.log(error);
	    });
*/
  res.setHeader('Content-Type', 'application/json');
  res.send( { 'Response': 'OK 200' } );
};
