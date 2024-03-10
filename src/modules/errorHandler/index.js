const { OpStatus } = require("../../../constants");

module.exports = (error, req, res, next) => {
  const statusCode = error?.statusCode ?? res?.statusCode ?? 500;
  
  res
    .status(statusCode)
    .json({
      success: false,
      statusCode,
      message: OpStatus?.[statusCode] ?? OpStatus[909],
      description: error.message,
      data: error.data,
      error: error.data ? error.data._ERR_ : undefined
    })
    .end();
}