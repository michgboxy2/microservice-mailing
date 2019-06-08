const mongoose = require('mongoose');
const Mail     = mongoose.model('Mail')

const mailHandler = async ({body :{subject, receiver, content}}, res)=> {
    let mail;
    if(!subject || !receiver || !content){
        
        return res.status(400).send({
            message : "You forgot a field",
            service : 'database service',
            status : 400,
            payload : null
        })
    }

     mail = new Mail({
        subject,
        receiver,
        content
    });

    try{
        mail = await mail.save();
    }catch(err){
        error = err;
    }

    res.send({
        message : "Got response from DB",
        service: 'Database service',
        status : 400,
        payload: mail || err
    })
}

module.exports = server => {
    server.post('/mails', mailHandler);
}