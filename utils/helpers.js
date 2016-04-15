'use strict';

var username = 'IanJuma';
var apiKey   = '53ce783db3b306b657e9f1909d70aceec8fc82cf0eccd5a0eab24bffc0d506ea';

var voiceUrl = 'https://voice.africastalking.com';

var request = require('request');

function call(from , to) {

    var data = JSON.stringify({
        'username': username,
        'from_': from,
        'to': to
    });

    var url = '/call';
    request({
        url: voiceUrl + url,
        strictSSL: true,
        body: data,
        method: 'POST',
        headers:{ 'apikey': apiKey, 'Content-Type': 'application/x-www-form-urlencoded' }
    })
    .on('response', function(response) {
        console.log(response.statusCode);
    })
    .on('error', function(err) { 
        console.log(err); 
    });
}

call('+254711082306', '+254701435178');
