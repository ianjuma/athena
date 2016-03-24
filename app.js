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
	var sessionId = req.body.sessionId;
	var serviceCode = req.body.serviceCode;
	var phoneNumber = req.body.phoneNumber;
	var text = req.body.text;

	console.log(sessionId, serviceCode, phoneNumber, text);
	var response = '';

	if (text == '') {
		response = "Welcome to Wired Networks Ltd \n";
		response += "1: To enter new device \n";
		response += "2: To enter sales person\n";
        response += "3: To check status of mobile device\n";
		response += "4: To Mark device as sold";
	}

    else if (text == '1') {
		response = "";
	}

	else if (text == '2') {
		response = "CON Enter 1 for recovery \n";
		response += "Enter 2 for lost and found";
	}

	else if (text == '2*1') {
		response += "END I don't care";
	}

	else if ( text== '2*2') {
		response += "END: lost found section";
	}

	if (text == '3') {
		response = "END Your balance is 2,000 KES";
	}

	next({
        response: response,
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
