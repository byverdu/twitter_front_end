'use strict';
let express = require( 'express' );
let path = require( 'path' );
let routes = require( './routes');
let favicon = require( 'serve-favicon' );

let app  = express();

app.set( 'views', path.join( __dirname, 'views' ) );
app.set( 'view engine', 'jade');

app.use( express.static( path.join( __dirname, 'public' ) ) );
app.use( '/', routes );
app.use( favicon( __dirname + '/public/images/favicon.ico' ) );
app.use('/jquery', express.static( path.join(__dirname, '/node_modules/jquery/dist/')));


app.listen(9393, function(){
    console.log('Server details', this.address());
});

module.exports = app;
