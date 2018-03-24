// General requires
let express = require('express');
let app = express();
let utils = require('./utils');
let lodash = require('lodash');
let bodyParser = require('body-parser');

// Middlewares requires
const _corsRequire = require('cors');
const _cors = require('./middlewares/cors');
const _morgan = require('morgan');

// Server should use middlewares
app.use(_corsRequire(_cors.corsMiddleware));
app.use(_morgan('common'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// Disable section
app.disable('etag');

// Check if slow
utils.setServerMode(process.env.MODE, app);

// Checking arguments as we need a context
if (process.argv.length > 2) {
  console.log('MOCK-SERVER: Server is configured to mock API from this project : ', process.argv[2]);
  if (!utils.exists(lodash.toLower(lodash.trim(process.argv[2])))) {
    console.log('MOCK-SERVER: Server was not able to find any mocks and controllers for the project you specified');
    process.exit(-1);
  }
  require('./contexts/' + process.argv[2] + '/routes')(app);
} else {
  process.exit(-1);
}

// Starting the server
app.listen(3000, function() {
  console.log('MOCK-SERVER: Node Server up and running');
});
