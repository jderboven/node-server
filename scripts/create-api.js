var _mkdirp = require('mkdirp');
var _path = require('path');
var _lodash  = require('lodash');
var _createFile = require('create-file');

const _apiName = _lodash.split(process.argv[2], '=')[1];
if (!_lodash.isNil(_apiName) && !_lodash.isEmpty(_apiName)) {
    createFolder(_path.join(__dirname, '../', 'contexts', _apiName));
    createFolder(_path.join(__dirname, '../', 'contexts', _apiName, 'mocks'));
    createFolder(_path.join(__dirname, '../', 'contexts', _apiName, 'controllers'));
    createApiFile(_path.join(__dirname, '../', 'contexts', _apiName,'controllers', _apiName + '.js'));
    createApiFile(_path.join(__dirname, '../', 'contexts', _apiName, 'routes.js'), 'module.exports = function(app) {\n};');
}

function createFolder(folderName) {
    _mkdirp(folderName, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log(folderName, ' created correctly');
        }
    });
}

function createApiFile(fileName, content) {
    if (_lodash.isNil(content) || _lodash.isEmpty(content)) {
        content = '';
    }
    _createFile(fileName, content, function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log(fileName, ' created correctly');
        }
    });
}