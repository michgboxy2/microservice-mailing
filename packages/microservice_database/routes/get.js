const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

const pingHandler = (_, res) => {
    res.send('healthy');
}

const mailHandler = async (_, res) => {
    let mails;
    let error;

    try {
        mails = await Mail.find();
    }catch(err){
        error = err;
    }

    res.send({
        message : 'Got response from db',
        service : 'Database service',
        status : 200,
        payload : mails || error
    })
}

const singleMailHandler = async ({params :{id}}, res) => {
    
    let mail;
    let error;

    try {
        mail = await Mail.findOne({_id : id})
    }catch(err){
        error = err;
    }

    res.send({
        message : 'Got response from db',
        service : 'Database service',
        status : 200,
        payload : mail || error
    })
}




module.exports = server => {
  server
  .get('/', pingHandler)
  .get('/mail', mailHandler)
  .get('/mails/:id', singleMailHandler);
}