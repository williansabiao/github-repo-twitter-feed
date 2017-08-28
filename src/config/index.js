import fs from 'fs';
import path from 'path';

const config = () => {
  let configVars = {
    twitter: {
      consumer_key: process.env.twitter_consumer_key,
      consumer_secret: process.env.twitter_consumer_key,
      access_token_key: process.env.twitter_consumer_key,
      access_token_secret: process.env.twitter_consumer_key,
    }
  };

  const configFileName = path.join(__dirname, `/config-${process.env.NODE_ENV}.json`);
  let configFileObject = {};

  if(process.env.NODE_ENV && fs.statSync(configFileName)) {
    configFileObject = JSON.parse(fs.readFileSync(configFileName, 'utf8'));
  } else {
    const errorMessage = `Please, copy config-template.json to a specific file of your enviroment. e.g.: NODE_ENV = ${process.env.NODE_ENV} -> /config/config-development.json`;
    throw errorMessage;
  }
  
  Object.assign(configVars, configFileObject, configVars);
  return configVars;
};

module.exports = config();