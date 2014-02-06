'use strict';

module.exports = function(app) {

    // text route
    var text = require('../controllers/text');
    app.post('/text', text.receive);

};
