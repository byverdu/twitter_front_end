'use strict';

const express = require( 'express' );
const router = express.Router();
let storage = require( '../config/storage' );

require( '../config/twitter' )();

router.get( '/', ( request, response ) => {

  let initialTweetStore = storage.getItem( 'initialTweetStore' );
  let secondTweetStore = storage.getItem( 'secondTweetStore' );
  let userStore = storage.getItem( 'userStore' );
  let toFollowStore = storage.getItem( 'toFollowStore' );

  let objectToRender = {
    initialTweetStore: initialTweetStore,
    secondTweetStore: secondTweetStore,
    userStore: userStore,
    toFollow:  toFollowStore
  };
  response.render( 'index', objectToRender );
});

module.exports = router;
