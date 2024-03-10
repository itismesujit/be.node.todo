const router = require('express').Router(),
  path = require('path'),
  fs = require('fs'),
  swaggerUi = require('swagger-ui-express'),
  resolve = require('json-refs').resolveRefs;

const { syntaxHighlight, host, schemes, basePath } = gConfig.swagger;

const swaggerOptions = {
  syntaxHighlight: syntaxHighlight ?? true,
}

resolve(JSON.parse(fs.readFileSync(path.resolve(__dirname, 'swagger.json')).toString()))
  .then(async results => {
    Object.assign(results.resolved, { host, schemes, basePath });
    
    router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(results.resolved, { swaggerOptions }));
    router.use('/api-docs.json', (req, res) => { res.json(results.resolved); });
  });

module.exports = router;