


const startApp = async () => {

  //creating global config
  require('./config/index').createConfig();
  process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

  const express = require('express');
  const app = express();


  // initializing app obj
  require('./app-utils/_initialise').initialize(app)
    .then(res => {
      const appStart = require('./app-utils/_expressify').expressify(app);
      if (appStart.status) {
        app
          .listen((process.env.PORT || 8000), () => console.log(`Running on port ${process.env.PORT || 8000}`))
          .timeout = 600000;
      } else throw appStart.error;
    })
    .catch(err => console.log(err))
}

startApp();