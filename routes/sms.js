'use strict';

var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT);


exports.receiveSms = function(req, res) {
    console.log(req.body);
	var from_ = req.body.from;
	var message = req.body.text;
	var to = req.body.to;
	var date = req.body.date;
	var id = req.body.id;

	console.log(from_, to, message, date, id);

	var sms = AfricasTalking.SMS;

	var opts = { to: from_, message: 'Hi, received - ' + message };
	console.log(opts);

	sms.send(opts)
	    .then(function(s) {
	    	console.log(s);
	    })
	    .catch(function (error) {
	    	console.log(error);
	    });

    res.setHeader('Content-Type', 'application/json');
	res.send( { 'response': 'OK 200' } );
};
