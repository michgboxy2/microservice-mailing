const server = require('express')();
const bodyparser = require('body-parser');

const config = require('./config');
const {port} = config;






server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended : true}));
require('./dbUtils')(config);
require('./routes/get')(server);
require('./routes/post')(server);

    server.listen(port, () => {
        console.log(`listening on ${port}`);
    });