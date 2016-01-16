'use strict';
const express = require( 'express' );
const router = express.Router();
let config = require( '../config/config' );
let Helper = require( '../helper/helper' );
let helper = new Helper();
let Twit = require('twit');
let TwitterAPI = new Twit( config.twitterAPI );
let tweetContainer = [];
let userObject;

router.get( '/', ( request, response ) => {

  TwitterAPI.get( config.urlAPI, config.queryAPI, (err, tweets) => {

    tweets.forEach( (tweet) => {
      tweetContainer.push( helper.buildTweetObject( tweet ) );
    });

    TwitterAPI.get( 'users/show', { screen_name: 'byverdu' }, ( err, user ) => {
      console.log(user);

      userObject = helper.buildUserObject( user );

      response.render( 'index', { tweetContainer: tweetContainer, userObject: userObject } );
    } );

  });
});

module.exports = router;
