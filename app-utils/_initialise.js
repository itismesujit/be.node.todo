const cors = require('cors');
const cookieParser = require('cookie-parser');
const timeout = require('express-timeout-handler');
const bodyParser = require('body-parser');

exports.initialize = async (app) => {
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

  app.use(cookieParser(''));

  app.use(cors({ origin: true, credentials: true }));
  app.use((req, res, next) => {
    req.response = {}
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    if (req.method === "OPTIONS")
      return res.status(200).end();
    else next();
  })

  // TIME OUT SETTING
  let serviceTimeout = 60;
  let timeOptions = {
    timeout: serviceTimeout * 1000,
    onTimeout: function (req, res) {
      res.status(503).send('Service unavailable. Please retry.')
    }
  }
  app.use(timeout.handler(timeOptions))

  app.use(require('../src/swagger'));

  require('./commonRoutes').init(app)
  // Add axios call
  
  // await require('./connections').createConnections();
  return true
}