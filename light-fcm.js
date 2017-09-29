'use strict';

var axios = require("axios");

class LightFcm {
    constructor(serverKey) {
        if (serverKey) {
            this.serverKey = serverKey;
        } else {
            throw Error('No serverKey is given.');
        }
        this.fcmOptions = {
            host: 'fcm.googleapis.com',
            port: 443,
            path: '/fcm/send',
            method: 'POST',
            headers: {}
        };
    }
}