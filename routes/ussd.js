'use strict';

exports.wiredUssd = function(req, res) {

  var message = '';

  var sessionId   = req.body.sessionId;
  var serviceCode = req.body.serviceCode;
  var phoneNumber = req.body.phoneNumber;
  var text 				= req.body.text;

  console.log(sessionId, serviceCode, phoneNumber, text);

  text.split('*');

	if (text === '') {
		message = 'Welcome to Wired Networks Ltd \n';
		message += '1: To enter new device \n';
		message += '2: To enter sales person\n';
	    message += '3: To check status of mobile device\n';
		message += '4: To Mark device as sold CON';
	}

	else if (text === '1') {
		message = 'Enter device IMEI number CON';
	}

	else if (text === '2') {
		message = 'Enter 1 for recovery \n';
		message += 'Enter 2 for lost and found CON';
	}

	else if (text === '2*1') {
	    message = 'Enter your name END';
	}

	else if (text === '2*2') {
		message += 'lost found section END';
	}

	else if (text === '3') {
		message = 'Your balance is 2,000 KES END';
	}

	else if (text === '4') {
	  message = 'Mark device sold END';
	}

	else {
	  message = 'Wrong input END';
	}

	res.contentType('text/plain');
	res.send(message, 200);
};
