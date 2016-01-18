'use strict';
let express = require( 'express' );
let path = require( 'path' );
let routes = require( './app/routes');
let favicon = require( 'serve-favicon' );

let app  = express();

app.set( 'views', path.join( __dirname, 'app/views' ) );
app.set( 'view engine', 'jade');

app.use( express.static( path.join( __dirname, 'app/public' ) ) );
app.use( '/', routes );
app.use( favicon( __dirname + '/app/public/images/favicon.ico' ) );
// serving jquery to client
app.use('/jquery', express.static( path.join(__dirname, '/node_modules/jquery/dist/')));

app.listen(9393, function(){
    console.log('Server details', this.address());
});

module.exports = app;
