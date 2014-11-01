var express = require('express'),
    path    = require('path');

var app     = express();

app.use(express.static(path.join(__dirname,'public')));

app.listen(9393, function(){

    console.log('Server details', this.address())
});

module.exports = app;