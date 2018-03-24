module.exports = function(app) {
    const _sp = require('./controllers/sp.js');
    app.get('/sp/programme', _sp.getProgramme);
};