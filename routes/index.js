'use strict';
const express = require( 'express' );
const router = express.Router();

let Twit = require('twit');
let config = require('../config/config');
let TwitterAPI = new Twit( config.twitterAPI );
let twitObject = {};

router.get( '/', ( request, response ) => {
  TwitterAPI.get('statuses/home_timeline', { q: 'byverdu', count: 10 }, (err, data) => {
    // console.log(data);
    twitObject.user = data[0].created_at;
    console.log(twitObject, 'inside');
    console.log(twitObject, 'twitObject');


  response.render( 'index', { data: twitObject.user } );

  });
});


module.exports = router;
