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

var DEVICE_INSERT = 'INSERT INTO Devices (imei, model, color) VALUES(?, ?, ?)';

exports.addDevice = function(imei, model, color) {
    connection.query({
      sql: DEVICE_INSERT,
      timeout: 40000,
      values: [imei, model, color]
    }, function(error, result) {
      if (error) {
          console.log(error);
      }

      console.log('changed ' + result.changedRows + ' rows');

    });
};
