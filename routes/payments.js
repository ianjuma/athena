'use strict';

var options = require('../config/config');
var AfricasTalking = require('africastalking')(options.AT);


exports.ipn = function(req, res) {
  console.log(req.body);

  res.setHeader('Content-Type', 'text/plain');
  res.send( 200 );
};

