'use strict';
const express = require( 'express' );
const router = express.Router();
let config = require('../config/config');

let Twit = require('twit');
let TwitterAPI = new Twit( config.twitterAPI );
let twitContainer = [];

router.get( '/', ( request, response ) => {

  TwitterAPI.get( config.urlAPI, config.queryAPI, (err, tweets) => {

    tweets.forEach( (tweet) => {
      console.log(tweet);
      let twitObject = {};
      twitObject.text = tweet.text;
      twitObject.name = tweet.user.name;
      twitObject.screen_name = tweet.user.screen_name;
      twitObject.profile_image_url = tweet.user.profile_image_url;


      twitContainer.push(twitObject);
    });

  response.render( 'index', { data: twitContainer } );

  });
});


module.exports = router;
