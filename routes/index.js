'use strict';
const express = require( 'express' );
const router = express.Router();
let config = require( '../config/config' );
let Helper = require( '../helper/helper' );
let helper = new Helper();
let Twit = require('twit');
let TwitterAPI = new Twit( config.twitterAPI );
let tweetContainer = [];

router.get( '/', ( request, response ) => {

  TwitterAPI.get( config.urlAPI, config.queryAPI, (err, tweets) => {

    tweets.forEach( (tweet) => {
      tweetContainer.push( helper.buildTweetObject( tweet ) );
    });

  response.render( 'index', { tweetContainer: tweetContainer } );

  });
});

module.exports = router;
