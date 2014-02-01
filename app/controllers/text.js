'use strict';

// var twilio = require('twilio-api');

exports.send = function() {

    var client = require('twilio')('AC4d63dcc465f19bb8a8e3c6c394ad8640', '14cc9f3097440c6a8c0d6a221f3281e3');

    client.sendSms({
        to:'8609084849',
        from:'6466796380',
        body:'Test Text!'
    }, function(error, message) {
        if (!error) {
            console.log('Success! The SID for this SMS message is:');
            console.log(message.sid);

            console.log('Message sent on:');
            console.log(message.dateCreated);
        } else {
            console.log(error);
            console.log(message);
            console.log('Oops! There was an error.');
        }
    });
};