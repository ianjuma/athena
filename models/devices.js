'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
      host     : 'localhost',
      user     : 'root',
      password : 'root'
});

var pool  = mysql.createPool({
      host     : 'localhost',
      user     : 'root',
      password : 'root'
});

var DEVICE_INSERT = "INSERT INTO Devices (id, imei, model) VALUES(?, ?, ?)";

exports.addDevice = function(device) {
    connection.query({
      sql: DEVICE_INSERT,
      timeout: 40000,
      values: ['', '', '']
    }, function(error, results, fields) {
      // do shit
    });
};
