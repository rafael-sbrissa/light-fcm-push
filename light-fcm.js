'use strict';

var axios = require("axios");

class LightFcm {

    constructor() {};

    /**
     * Send data to Firebase Cloud Messaging
     * Needs to be like
     * {
     *  to: token,
     *  priority: normal or high,
     *  notification: {
     *    title: title,
     *    body: body
     *  },
     *  data: { //optional
     *    someIndex: "some information"
     * }
     * @param {json} payload 
     */
    send(payload, serverKey) {
        return this._sendNotification(payload);
    }


    _buildRequest(notification, serverKey) {
        return {
            url: 'https://fcm.googleapis.com/fcm/send',
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `key=${serverKey}`
            },
            data: notification
        };
    }

    _sendNotification(notification, serverKey) {
        const request = this._buildRequest(notification, serverKey);
        return axios(request);
    }
}
module.exports = new LightFcm();