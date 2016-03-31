'use strict';

var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT);


exports.wiredUssd = function(req, res) {

	new AfricasTalking.USSD((params, next) => {

	  var endSession = false;
	  var message = '';

	  var sessionId = params.session;
	  var serviceCode = params.serviceCode;
	  var phoneNumber = params.phoneNumber;

	  console.log(sessionId, serviceCode, phoneNumber, params.text);

	  params.text.split('*');

		if (params.text === '') {
			message = 'Welcome to Wired Networks Ltd \n';
			message += '1: To enter new device \n';
			message += '2: To enter sales person\n';
	        message += '3: To check status of mobile device\n';
			message += '4: To Mark device as sold';
		}

	    else if (params.text === '1') {
			message = 'Enter device IMEI number';
		}

		else if (params.text === '2') {
			message = 'Enter 1 for recovery \n';
			message += 'Enter 2 for lost and found';
		}

		else if (params.text === '2*1') {
            message = "Enter your name";
	        endSession = true;
		}

		else if (params.text === '2*2') {
			message += 'lost found section';
	        endSession = true;
		}

		else if (params.text === '3') {
			message = 'Your balance is 2,000 KES';
	        endSession = true;
		}

    else if (params.text === '4') {
        message = 'Mark device sold';
        endSession = true;
    }

    else {
        message = 'Wrong input';
        endSession = true;
    }

	next({
		response: message,
		endSession: endSession
	});

  });
};
