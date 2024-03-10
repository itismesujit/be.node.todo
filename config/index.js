const
  fs = require('fs'),
  path = require('path');

exports.createConfig = async () => {
  const configBuffer = fs.readFileSync(path.resolve('config/data/config.json'), 'utf-8');
  
  if (!configBuffer) process.exit(1);
  global.gConfig = JSON.parse(configBuffer);
}
