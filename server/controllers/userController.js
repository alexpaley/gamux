var fs = require('fs');

var _recordEmail = function(req, res) {
    var email = req.body.email;

    if(!email) {
        var err = {
            message: 'No email address provided'
        };
        res.send(200, { error: err.message });
    } else {
        var data = req.body.email + '\n';

        fs.appendFile('emailList.txt', data, function(err) {
            if(err) {
                console.log("There was an error");
            }

            console.log("Data was appended to file");
        });

        res.send(200, { email: email });
    }
};

exports.register = function(app) {
    app.post('/api/user/email', _recordEmail);

    return app;
};
