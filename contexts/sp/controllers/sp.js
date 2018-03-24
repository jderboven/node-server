const _utils = require('../../../utils');
const _lodash = require('lodash');


/**
 * Retrieves the programme for the user ( many or not ? ) ...
 * It must contains seances with their id and the day prefix
 * @param req
 * @param res
 */
exports.getProgramme = (req, res) => {
    const programme = _utils.getFileContentAsJSON('programme.json', 'sp');
    res.json(programme);
};
