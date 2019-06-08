const amqp  = require('amqplib/callback_api');
const {q : {uri}} = require('../config/config.dev'); 

const q = 'test_q';

let channel;

amqp.connect(uri, (err, conn) => {
    if(err) throw new Error(err);

    conn.createChannel((err, ch) => {
        if(err) throw new Error(err);

        ch.assertQueue(q, {durable : true}); //durable option keeps the message till it's dispersed 

        // ch.sendToQueue(q, Buffer.from('Hello Test Consumer'));
        channel = ch;
    });

    // setTimeout(() => {
    //     conn.close();

    //     process.exit(0);
    // }, 1000);
});

const pushToMessageQueue = msg => {
    if(!channel) setTimeout(pushToMessageQueue(msg), 1000);
    channel.sendToQueue(q, Buffer.from(msg));

    return{a : 'done'};
}

module.exports = {
    pushToMessageQueue
}