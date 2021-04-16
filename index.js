console.log('Loading function');

var https = require('https');

exports.handler = function(event, context){
    //console.log('Received event:', JSON.stringify(event, null, 2));
    const message = event.Records[0].Sns.Message;
    console.log('From SNS:', message);
    var host = "hooks.slack.com"
    var path = "***YOUR HOOK PATH***"

    let options = {
        hostname: host,
        path: path,
        port: 443,
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        }
    };

    let payload = { text: message, username:"test_notification", blocks:[{
        type: "section",
        text: {
            type: "plain_text",
            text: message
        }
    }]};
    console.log('payload : ', payload);

    const data = JSON.stringify(payload);
    let req = https.request(options, (res)=>{
        res.setEncoding('utf8');
        res.on('data', (chunk)=>{
        });
    });
    req.on('error', (e)=>{
        console.log('missingpoint : ' + e.message);
    });
    req.write(data);
    req.end();
    return message;
};
