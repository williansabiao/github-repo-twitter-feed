import fs from 'fs';

const config = () => {
  let configVars = {
    twitter: {
      consumer_key: process.env.twitter_consumer_key,
      consumer_secret: process.env.twitter_consumer_key,
      access_token_key: process.env.twitter_consumer_key,
      access_token_secret: process.env.twitter_consumer_key,
    }
  };

  console.log(process.env.NODE_ENV);
  const configFileName = `./config/config-${process.env.NODE_ENV}.json`;
  let configFileObject = {};

  console.log(fs.existsSync(configFileName), configFileName);
  if(process.env.NODE_ENV && fs.existsSync(configFileName)) {
    configFileObject = fs.readFileSync(configFileName, 'utf8');
  } else {
    const errorMessage = `Please, create a file specific to your enviroment. e.g.: NODE_ENV = ${process.env.NODE_ENV} -> /config/config-development.json`;
    throw errorMessage;
  }

  return Object.assign(configVars, configFileObject, configVars);
};

module.exports = config();