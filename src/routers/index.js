const router = require('express').Router();
// require middlware here if required.


router.use('/todos', require('./todos'));

module.exports = router;
