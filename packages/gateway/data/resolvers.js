const axios = require('axios');
const {serviceDatabase : {port}}    = require('../config');

const {pushToMessageQueue}          = require('../Q/connect');

const hostname = 'http://localhost';
const databaseURL = `${hostname}:${port}`;



const getMails = async () => {
    const mails = (await axios.get(`${databaseURL}/mail`)).data.payload;
    return mails;
}

const getOneMail = async (id) => {
    const mail = (await axios.get(`${databaseURL}/mails/${id}`)).data.payload;
    return mail;
}

const postMail = async ({receiver, content, subject}) => {
    const mail = (await axios.post(`${databaseURL}/mails`, 
        {
            receiver,
            content,
            subject
        }
    )).data.payload;

    return mail;

}


module.exports = {
    Query: {
        mails: () => getMails(),
        mail: (_, {_id}) => getOneMail(_id)
    },
    
    Mutation : {
        mail: (_, args) => {
            let result;
            let error;
            try {
               result = postMail(args); 

            }catch(err){
                 error = err;
            }

            pushToMessageQueue(JSON.stringify(args));

            return result || error;

        }
    }
};;