const mongoose = require('mongoose');
const mailSchema = require('./Models/mail'); 

module.exports = config => {
    mongoose.Promise = global.Promise;
    mongoose.connect(config.mongoURI);

    mongoose.model('Mail', mailSchema);
}