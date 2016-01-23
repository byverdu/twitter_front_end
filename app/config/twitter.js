'use strict';

let config = require( './config' );
let Helper = require( '../helper/helper' );
let helper = new Helper();
let storage = require( './storage' );
let Twit = require('twit');
let TwitterAPI = new Twit( config.twitterAPI );

module.exports = () => {

  let tweetStore = [];
  let toFollowStore = [];
  let toFollowRandom;
  let userObject;

  // Call to API to retrieve latest tweets
  TwitterAPI.get( config.tweetUrlAPI, config.tweetQueryAPI, (err, tweets) => {

    tweets.forEach( (tweet) => {
      tweetStore.push( helper.whichObjectBuild( helper.buildTweetObject, helper.buildRetweetedObject, tweet) );
    });

    toFollowRandom = helper.arrayRandomValues( tweetStore );
    helper.buildToFollow( tweetStore, toFollowRandom, toFollowStore);

    // Setting stores to save
    storage.setItem( 'initialTweetStore', tweetStore.splice( 0, 15 ) );
    storage.setItem( 'secondTweetStore',  tweetStore );
    storage.setItem( 'toFollowStore',  toFollowStore );
  });

  // Call to API to retrieve user profile (byverdu)
  TwitterAPI.get( config.userUrlAPI, config.userQueryAPI, ( err, user ) => {

    userObject = helper.buildUserObject( user );
    storage.setItem( 'userStore',  userObject );
  } );
};
