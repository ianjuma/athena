'use strict';

var express    = require('express');

var app        = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var options = {
    apiKey: '9586e7c45dc1e79fd68f9380b0618019507743ff889b1f38ec393dc509a51475',
    username: 'IanJuma',
    format: 'json'
};

var AfricasTalking = require('africastalking')(options);

var port = process.env.PORT || 8000;

app.post('/receiveSms', function(req, res) {
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
});


app.post('/wired-ussd', new AfricasTalking.USSD((params, next) => {
    var endSession = false;
    var message = '';

	var sessionId = params.sessionId;
	var serviceCode = params.serviceCode;
	var phoneNumber = params.phoneNumber;

    console.log(sessionId, serviceCode, phoneNumber, params.text);

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
		message += 'I don\'t care';
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
}));

app.post('/dlr', function(req, res) {
	var messageId = req.body.id;
	var status = req.body.status;

	console.log(messageId, status);
	res.send(200);
});

app.get('/', function(req, res) {
    res.json({ message: 'API Running' });
});

app.listen(port);

console.log('Magic happens on port ' + port);
