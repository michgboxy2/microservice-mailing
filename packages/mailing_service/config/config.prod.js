const {PORT, Q_URI} = process.env;

module.exports = {
    port : PORT || 3000,
    q:{
        uri: Q_URI || 'amqp://vovyhocj:cTmUaRXWIjpA2fOV6aZvvh1pWkfH7DAS@salamander.rmq.cloudamqp.com/vovyhocj'
    }
}