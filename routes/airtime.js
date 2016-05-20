'use strict';

var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT);

var airtime = AfricasTalking.AIRTIME;
var opts = { 'recipients': [{ "phoneNumber": '+254701435178', "amount": '10' }] };

airtime.send(opts)
	    .then(function(s) {
	    	console.log(s);
	    })
	    .catch(function (error) {
	    	console.log(error);
	    });
