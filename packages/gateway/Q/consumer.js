const amqp  = require('amqplib/callback_api');

const q = 'test_q';

amqp.connect('amqp://vovyhocj:cTmUaRXWIjpA2fOV6aZvvh1pWkfH7DAS@salamander.rmq.cloudamqp.com/vovyhocj', (err, conn) => {
    if(err) throw new Error(err);

    conn.createChannel((err, ch) => {
        if(err) throw new Error(err);

        ch.assertQueue(q, {durable: true});

        ch.consume(q, msg => {
            console.log('i got the message', msg.content.toString());
        }, {noAck : true});  //tell the server to delete the queued messages
    })
})