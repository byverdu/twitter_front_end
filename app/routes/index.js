'use strict';

const express = require( 'express' );
const router = express.Router();
let storage = require( '../config/storage' );

// initial call to twitter API
require( '../config/twitter' )();


router.get( '/', ( request, response ) => {

  // require( '../config/twitter' )();

  let initialTweetStore = storage.getItem( 'initialTweetStore' );
  let userStore = storage.getItem( 'userStore' );
  let toFollowStore = storage.getItem( 'toFollowStore' );

  let objectToRender = {
    initialTweetStore: initialTweetStore,
    userStore: userStore,
    toFollow:  toFollowStore
  };
  response.render( 'index', objectToRender );
});

// Creating path for ajax client call to load extra tweets (infinite scrolling)
router.get( '/secondFeed', ( request, response ) => {
  let secondTweetStore = storage.getItem( 'secondTweetStore' );

  response.render( 'secondFeed', { secondTweetStore: secondTweetStore } );
});

module.exports = router;
