const _fs = require('fs');
const _path = require('path');
const _slow = require('./middlewares/slow');

exports.interopRequireDefault = function (obj) {
    return obj && obj.__esModule ? obj : { default: obj };
};

exports.getFileContentAsJSON = function(fileName, selectedContext) {
    let filePath = _path.join(__dirname, 'contexts', selectedContext, 'mocks', fileName);
    return JSON.parse(_fs.readFileSync(filePath, 'utf8'));
};

exports.exists = function(selectedContext) {
  return _fs.existsSync(_path.join(__dirname, 'contexts', selectedContext));
};

exports.setServerMode = (type, app) => {
    let modes = {
        'SLOW': () => {
            console.log('MOCK-SERVER: Using slow mode');
            app.use('/', _slow.slowMiddleware);
        },
        'default': () => {
            console.log('MOCK-SERVER: No mode specified, mock server will run as-is');
        }
    };
    (modes[type] || modes['default'])();
};