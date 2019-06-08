const  {PORT, Q_URI, MJ_API_PUBLIC, MJ_API_SECRET} = process.env;

module.exports = {
    port : PORT || 5000,
    q:{
        uri: Q_URI || 'YOUR RABBITMQ'
    },
    mailjet: {
        apiPublic : MJ_API_PUBLIC || 'BLA BLA BLA',
        apiSecret : MJ_API_SECRET || 'BLA BLA BLA'
    }

}