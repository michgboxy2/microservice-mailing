const  {PORT} = process.env;

module.exports = {
    port : PORT || 4000,
    mongoURI : 'mongodb://michgboxy:password1@ds231517.mlab.com:31517/microservice'
}