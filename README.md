# Instructions

## Requirements
Node version: **v8.2.1**

[Yarn](https://yarnpkg.com/en/docs/install) version: **v0.27.5**

## Run
### Important!!!
To run, copy **/src/config/config-template.json** *->* **/src/config/config-development.json**.

Change the twitter keys of according your keys.

*Always that you change the config file, you need run ```npm run build``` to copy the new file to app folder*

To run, execute this commands on root folder:
```
    yarn install
    npm run build
    NODE_ENV=development npm start
```

Look the result on the json file. */output.json*

## Tests
To run the tests, run:
```
    NODE_ENV=development npm run test
```

The coverage of tests isn't 100%.