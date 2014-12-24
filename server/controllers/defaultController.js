var path = require('path');

var filePath = path.normalize(__dirname + '/../../client/app/');

var _index = function(req, res) {
    res.sendFile(filePath + 'index.html');
};

var _partials = function(req, res) {
    res.sendFile(filePath + 'partials/' + req.params.name + '.html');
};

exports.register = function(app) {
    app.get('/', _index);
    app.get('/partials/:name', _partials);
    app.get('*', _index);

    return app;
};
