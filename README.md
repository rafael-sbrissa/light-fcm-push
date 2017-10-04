# light-fcm-push

   A light module focused on Firebase Clud Messaging for AWS Lambda.

## Use exemple
    var fcm = require('light-fcm-push');
    var serverKey = "your server key";
    var message = {
        to: token,
        priority: "normal",  //must be normal or high
        notification: {
           title: "Push Title",
           body: "Push content"
        },
        data: { //Optional
           yourOwnKey: "content for this key",
           otherKey: "content"
        }
     };
     //This will return a promisse
     return fcm.send(message, serverKey);
