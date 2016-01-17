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

  TwitterAPI.get( config.tweetUrlAPI, config.tweetQueryAPI, (err, tweets) => {

    tweets.forEach( (tweet) => {
      tweetStore.push( helper.buildTweetObject( tweet ) );
    });

    toFollowRandom = helper.arrayRandomValues( tweetStore );
    helper.buildToFollow( tweetStore, toFollowRandom, toFollowStore);

    storage.setItem( 'initialTweetStore', tweetStore.splice( 0, 10 ) );
    storage.setItem( 'secondTweetStore',  tweetStore );
    storage.setItem( 'toFollowStore',  toFollowStore );
  });

  TwitterAPI.get( config.userUrlAPI, config.userQueryAPI, ( err, user ) => {

    userObject = helper.buildUserObject( user );
    storage.setItem( 'userStore',  userObject );
  } );
};
