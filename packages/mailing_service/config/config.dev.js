const  {PORT, Q_URI, MJ_API_PUBLIC, MJ_API_SECRET} = process.env;

module.exports = {
    port : PORT || 5000,
    q:{
        uri: Q_URI || 'amqp://vovyhocj:cTmUaRXWIjpA2fOV6aZvvh1pWkfH7DAS@salamander.rmq.cloudamqp.com/vovyhocj'
    },
    mailjet: {
        apiPublic : MJ_API_PUBLIC || 'a5fb2de6ac4202717a532cc1ae8c65d1',
        apiSecret : MJ_API_SECRET || '271b9828ef8b279d076a0dab65ac8f69'
    }

}