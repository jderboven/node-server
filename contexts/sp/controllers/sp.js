const _utils = require('../../../utils');
const _lodash = require('lodash');


/**
 * Retrieves the programme for the user ( many or not ? ) ...
 * It must contains seances with their id and the day prefix
 * @param req
 * @param res
 */
exports.getProgramme = function (req, res) {
    var programme = _utils.getFileContentAsJSON('programme.json', 'la');
    res.json(programme);
};

exports.getExercice = function(req, res) {
    var answers = _utils.getFileContentAsJSON('answer.json', 'la');
    res.json(answers);
};

exports.getResults = function(req, res) {
    res.json(_utils.getFileContentAsJSON('result.json', 'la'));
};
