'use strict';

const express = require( 'express' );
const router = express.Router();
let storage = require( '../config/storage' );

// calling to twitter API

setInterval( () => {
  console.log('calling API');
  require( '../config/twitter' )();
}, 1800000);


router.get( '/', ( request, response ) => {

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
