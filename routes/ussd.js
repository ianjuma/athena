'use strict';

var db = require('./../models');

exports.wiredUssd = function(req, res) {

  var message = '';

  var sessionId   = req.body.sessionId;
  var serviceCode = req.body.serviceCode;
  var phoneNumber = req.body.phoneNumber;
  var text 	      = req.body.text;

  console.log(sessionId, serviceCode, phoneNumber, text);

  var length = text.split('*').length;
  var txt = text.split('*');

	if (text === '') {
		message = 'CON Welcome to Wired Networks Ltd \n';
		message += '1: Enter new device \n';
		message += '2: Enter sales person\n';
	    message += '3: Check status of mobile device\n';
		message += '4: Mark device as sold';
	}

    // add device
	else if (text === '1') {
        // check if user is agent
		message = 'CON Enter device IMEI number';
	}
    else if (length === 2 && txt[0] === '1') {
        message = 'CON Enter device color';
    }
    else if (length === 3 && txt[0] === '1') {
        message = 'CON Enter device model\n';
        message += 'eg. Nokia 3310';
    }
    else if (length === 4 && txt[0] === '1') {
        message = 'CON Enter Warranty status\n';
        message += 'Yes/No';
    }
    else if (length === 5 && txt[0] === '1') {
        message = 'CON Enter Insurance status\n';
        message += 'Yes/No';
    }
    else if (length === 6 && txt[0] === '1') {
        message = 'CON Is device in stock\n';
        message += 'Yes/No';
    }
    else if (length === 7 && txt[0] === '1') {
        // commit to db
        message = 'END Device registered';
        var options = text.split('*');

        db.Device.create({
          imei: options[1],
          color: options[2],
          model: options[3],
          warrant_status: options[4],
          insurance_status: options[5],
          in_stock: options[6]
        }).then(function(device) {
          console.log('device added', device);
        });

    }

    // add sales person
	else if (text === '2') {
        // check is user is agent
		message = 'CON Enter sales agent name\n';
	}
	else if (length === 2 && txt[0] === '2') {
	    message = 'CON Enter sales agent email';
	}
    else if (length === 3 && txt[0] === '2') {
        message = 'CON Enter sales agent code';
    }
    else if (length === 4 && txt[0] === '2') {
        message = 'CON Enter agent location';
    }
    else if (length === 5 && txt[0] === '2') {
        message = 'END Sales agent added';
        // commit to db
        var elements = text.split('*');
        console.log(elements);
    }


	else if (text === '3') {
		message = 'CON Enter device IMEI number';
	}
    else if (length === 2 && txt[0] === '3') {
        message = 'CON Enter your ID number';
    }
    else if (length === 3 && txt[0] === '3') {
        // check device authenticity
        message = 'END You have a genuine device';
    }

	
    else if (text === '4') {
	    message = 'CON Enter sales code';
	}
    else if (length === 2 && txt[0] === '4') {
        message = 'CON Enter phone IMEI number';
    }
    else if (length === 3 && txt[0] === '4') {
        message = 'CON Enter Purchaser ID number';
    }
    else if (length === 4 && txt[0] === '4') {
        message = 'CON Enter Purchaser Name';
    }
    else if (length === 5 && txt[0] === '4') {
        message = 'CON Enter Purchaser Phone contact';
    }
    else if (length === 6 && txt[0] === '4') {
        message = 'END Device sold';
    }

	else {
	  message = 'END Wrong input';
      // reply with menu
	}

	res.contentType('text/plain');
	res.send(message, 200);
};
