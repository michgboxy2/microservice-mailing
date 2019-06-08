const amqp  = require('amqplib/callback_api');
const {q : {uri}} = require('../config/config.dev'); 

const sendMail = require('../handler/sendMail');

module.exports = () => {
const q = 'test_q';

amqp.connect(uri, (err, conn) => {
    if(err) throw new Error(err);

    conn.createChannel((err, ch) => {
        if(err) throw new Error(err);

        ch.assertQueue(q, {durable : true}); //durable option keeps the message till it's dispersed 

        // ch.sendToQueue(q, Buffer.from('Hello Test Consumer'));
        ch.consume(q, 
            ({content}) => {
                let mail;
            
            try{
              mail = JSON.parse(content.toString());
            }catch(e){
                console.log(e);
                mail = content.toString();
            }

            console.log('I received a mail!!!', mail);
            sendMail(mail);
        }, {noAck : true}); //setting no acknoledgement to true is telling rabbitMQ not to care about the message, delete on consume
    });

});
};

