'use strict';

exports.dlr = function(req, res) {
	var messageId = req.body.id;
	var status = req.body.status;

	console.log(messageId, status);
	res.send(200);
};
