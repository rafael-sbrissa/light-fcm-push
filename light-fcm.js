'use strict';

var axios = require("axios");

class LightFcm {
    constructor(serverKey) {
        if (serverKey) {
            this.serverKey = serverKey;
        } else {
            throw Error('No serverKey is given.');
        }
    }

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
    send(payload) {
        return this._sendNotification(payload);
    }


    _buildRequest(notification) {
        return {
            url: fcmURL,
            method: 'post',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `key=${this.serverKey}`
            },
            data: notification
        }
    }

    _sendNotification(notification) {
        const request = this._buildRequest(notification);
        return axios(request);
    }
}
module.exports = new LightFcm();