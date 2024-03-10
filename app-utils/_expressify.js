const
  router = require('../src/routers'),
  errorHandler = require('../src/modules/errorHandler'),
  responseHandler = require('../src/modules/responseHandler'),
  fileUpload = require('express-fileupload');

exports.expressify = app => {
  try {
    app.use(fileUpload())
    app.use(router)
    app.use(responseHandler)
    app.use(errorHandler)
    return { status: true }
  } catch (e) {
    return { error: e, status: false }
  }
}