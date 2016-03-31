'use strict';

exports.wiredUssd = function(req, res) {

  var message = '';

  var sessionId   = req.body.sessionId;
  var serviceCode = req.body.serviceCode;
  var phoneNumber = req.body.phoneNumber;
  var text 	      = req.body.text;

  console.log(sessionId, serviceCode, phoneNumber, text);

  var length = text.split('*').length;
  var txt = text.split('*');
  console.log(txt[0]);

	if (text === '') {
		message = 'CON Welcome to Wired Networks Ltd \n';
		message += '1: To enter new device \n';
		message += '2: To enter sales person\n';
	    message += '3: To check status of mobile device\n';
		message += '4: To Mark device as sold';
	}

	else if (text === '1') {
		message = 'CON Enter device IMEI number';
        console.log(txt[0]);
	}
    else if (length === 2 && txt[0] === 1) {
        message = 'CON Enter device color';
    }
    else if (length === 3 && txt[0] === 1) {
        message = 'CON Enter device model';
    }
    else if (length === 4 && txt[0] === 1) {
        // persist
        message = 'END Device registered';
    }

	else if (text === '2') {
		message = 'CON Enter 1 for recovery \n';
		message += 'Enter 2 for lost and found';
	}

	else if (text === '2*1') {
	    message = 'END Enter your name';
	}

	else if (text === '2*2') {
		message += 'END lost found section';
	}

	else if (text === '3') {
		message = 'END Your balance is 2,000 KES';
	}

	else if (text === '4') {
	  message = 'END Mark device sold';
	}

	else {
	  message = 'Wrong input';
	}

	res.contentType('text/plain');
	res.send(message, 200);
};
