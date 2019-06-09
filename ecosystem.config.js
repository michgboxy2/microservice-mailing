const path = require('path');

const basePath = path.join(__dirname, '/packages');



module.exports = {
  apps : [
    //first application
    {
    name: 'Gateway',
    script: basePath + '/gateway/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      PORT : 3001,
      SERVICE_DB_PORT: 4001,
      Q_URI: 'amqp://vovyhocj:cTmUaRXWIjpA2fOV6aZvvh1pWkfH7DAS@salamander.rmq.cloudamqp.com/vovyhocj'
    },
    env_production: {
      PORT : 3001
    }
  },
  //Database service
  {
    name: 'DB Service',
    script: basePath + '/microservice_database/server.js',
    watch: true,
    env: {
      PORT : 4001,
      mongoURI : 'mongodb://michgboxy:password1@ds231517.mlab.com:31517/microservice'
    }
  },
  //mailing service
  {
    name: 'mailing Service',
    script: basePath + '/mailing_service/index.js',
    watch: true,
    env: {
        MJ_API_PUBLIC : 'a5fb2de6ac4202717a532cc1ae8c65d1',
        MJ_API_SECRET : '271b9828ef8b279d076a0dab65ac8f69',
      Q_URI: 'amqp://vovyhocj:cTmUaRXWIjpA2fOV6aZvvh1pWkfH7DAS@salamander.rmq.cloudamqp.com/vovyhocj'
    }
  }
],

  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
