const constants = require('../../../constants');

module.exports = (req, res, next) => {
    const { statusCode = 200, message = '', data = {} } = req.response;

    res
        .status(statusCode || constants.HTTP_200)
        .json({
            success: true,
            statusCode,
            message,
            data
        });
}
