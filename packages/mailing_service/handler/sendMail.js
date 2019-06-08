const {mailjet : {apiPublic, apiSecret}} = require('../config');
const Mailjet = require('node-mailjet').connect(apiPublic, apiSecret);

console.log(Mailjet);
module.exports = async mail => {
    const request = Mailjet.post('send').request({
       fromEmail: 'michgboxy@gmail.com',
       fromName : 'Michael King',
       Subject : mail.subject,
       'Text-part' : mail.content,
       Recipients: [
           {
               Email: mail.receiver
           }
       ]
    });

    console.log(request.body);
}