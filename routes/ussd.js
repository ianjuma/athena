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
		message += '1: Enter new device \n';
		message += '2: Enter sales person\n';
	    message += '3: Check status of mobile device\n';
		message += '4: Mark device as sold';
	}

	else if (text === '1') {
		message = 'CON Enter device IMEI number';
	}
    else if (length === 2 && txt[0] === '1') {
        message = 'CON Enter device color';
    }
    else if (length === 3 && txt[0] === '1') {
        message = 'CON Enter device model';
    }
    else if (length === 4 && txt[0] === '1') {
        // persist
        message = 'END Device registered';
    }


	else if (text === '2') {
		message = 'CON Enter agent name\n';
	}
	else if (length === 2 && txt[0] === '2') {
	    message = 'CON Enter agent email';
	}
    else if (length === 3 && txt[0] === '2') {
        message = 'CON Enter agent ID number';
    }
    else if (length === 4 && txt[0] === '2') {
        message = 'END Sales agent added';
    }


	else if (text === '3') {
		message = 'CON Enter device IMEI number';
	}
    else if (length === 2 && txt[0] === '3') {
        message = 'CON Enter your ID number';
    }
    else if (length === 3 && txt[0] === '3') {
        message = 'END You have a genuine device';
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
