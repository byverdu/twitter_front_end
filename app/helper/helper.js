'use strict';

/**
 * hasTweetImage - checks if object has "media" property
 *
 * @param  {object} tweet - single tweet object
 * @return {string}  media url or "no image"
 */
function hasTweetImage( tweet ) {
  return tweet.entities.hasOwnProperty( 'media' ) ? tweet.entities.media[0].media_url : 'no image';
}

/**
 * splitTweetText - slices tweet text
 *
 * @param  {string} tweet -- tweet's text
 * @param  {RegExp} pattern -- pattern against the string would be split
 * @return {string} last position of splitting the string
 */
function splitTweetText( tweet, pattern ) {
  return tweet.split( pattern ).pop();
}

/**
 * isRetweeted - checks value for two first characters on tweet text
 *
 * @param  {Object} tweet -- single tweet object
 * @return {Boolean} Returns "true" if the text starts by RT
 */
function isRetweeted( tweet ){
  // Custom String.charAt();
  function checkChartAt( item, charPosition, charSearch) {
    return item.text.charAt( charPosition ) === charSearch;
  }
  return ( checkChartAt( tweet, 0, 'R' ) && checkChartAt( tweet, 1, 'T' ) ) ? true : false;
}


/**
 * getRandomValues - Generates a random value between the parameter passed and 0
 *
 * @param  {number} totalCount -- length of array that holds all tweets
 * @return {number} random generated value
 */
function getRandomValues( totalCount ) {
  return Math.floor( Math.random() * ( Number( totalCount ) - 0) + 0 );
}


/**
 * convert4digitNumber - converts a number with 4 or more digits into a custom
 *                       string representation
 *
 * @param  {number} number -- number that needs to be converted
 * @return {string}  the result will depend on the number of digits
 * @example
 * console.log( convert4digitNumber( 7500 ) ); // "7.5K"
 * console.log( convert4digitNumber( 37500 ) ); // "37.5K"
 */
function convert4digitNumber( number ) {
  let stringNumber = String( number );
  let splitString = stringNumber.split('');
  let resultString = '';
  let numberCount = splitString.length;

  switch ( numberCount ) {
    case 4:
      resultString = `${ splitString[0] }.${ splitString[1] }K`;
      break ;
    case 5:
      resultString = `${ splitString[0]+splitString[1] }.${ splitString[2] }K`;
      break;
    case 6:
      resultString = `${ splitString[0]+splitString[1]+splitString[2] }K`;
      break;
    case 7:
      resultString = `${ splitString[0] }.${ splitString[1]+splitString[2] }M`;
      break;
    default:
      resultString = stringNumber;
  }
  return resultString;
}

/**
 * @class
 *
 */
function Helper() {}

/**
 * Helper.prototype.buildTweetObject - Called when is not a retweet,
 * creates object with API values
 *
 * @memberof Helper
 * @param  {object} tweet - Single tweet returned object from API
 * @return {object} custom build object for a non retweet tweet
 */
Helper.prototype.buildTweetObject = function( tweet ) {

  let backgroundImage = tweet.user.profile_banner_url || 'images/defaultBackground.jpg';

  return {
    retweet: false,
    text: tweet.text,
    tweetImage: hasTweetImage( tweet ),
    name: tweet.user.name,
    description: tweet.user.description,
    screen_name: tweet.user.screen_name,
    profile_image_url: tweet.user.profile_image_url,
    profile_banner_url: backgroundImage,
    followers_count: convert4digitNumber( tweet.user.followers_count ),
    friends_count: convert4digitNumber( tweet.user.friends_count ),
    statuses_count: convert4digitNumber( tweet.user.statuses_count )
  };
};


/**
 * Helper.prototype.buildRetweetedObject - Called when is a retweet,
 * creates object with API values
 *
 * @memberof Helper
 * @param  {object} tweet Single tweet object returned from API
 * @return {object}       custom build object for a retweet tweet
 */
Helper.prototype.buildRetweetedObject = function( tweet ) {

  let backgroundImage = tweet.retweeted_status.user.profile_banner_url || 'images/defaultBackground.jpg';
  let splitPattern = /RT @.*\: /;

  return {
    retweet: true,
    whoRetweeted: tweet.user.name,
    name: tweet.retweeted_status.user.name,
    screen_name: tweet.retweeted_status.user.screen_name,
    text: splitTweetText( tweet.text, splitPattern),
    tweetImage: hasTweetImage( tweet ),
    profile_banner_url: backgroundImage,
    profile_image_url: tweet.retweeted_status.user.profile_image_url,
    followers_count: convert4digitNumber( tweet.retweeted_status.user.followers_count ),
    friends_count: convert4digitNumber( tweet.retweeted_status.user.friends_count ),
    statuses_count: convert4digitNumber( tweet.retweeted_status.user.statuses_count )

  };
};


/**
 * Helper.prototype.buildUserObject - Called to create user object with API values
 *
 * @memberof Helper
 * @param  {object} user - object returned from the API call.
 * @return {object}       custom build object with user values
 */
Helper.prototype.buildUserObject = function( user ) {

  let backgroundImage = user.profile_banner_url || 'images/defaultBackground.jpg';

  return {
    name: user.name,
    screen_name: user.screen_name,
    profile_image_url: user.profile_image_url,
    profile_banner_url: backgroundImage,
    followers_count: convert4digitNumber( user.followers_count ),
    friends_count: convert4digitNumber( user.friends_count ),
    statuses_count: convert4digitNumber( user.statuses_count )
  };
};


/**
 * Helper.prototype.arrayRandomValues - fills an array with 3 different random values, used to get toFollow users
 * @memberof Helper
 * @param  {array} array - array with all the custom objects
 * @return {array}       array with 3 values to be used as index to retrieve users
 */
Helper.prototype.arrayRandomValues = function( array ) {
  let arrayCount = ( array.length - 1 );
  let resultCount = 3;
  let resultArray = [];

  while ( resultArray.length < resultCount ) {
    let randValue = getRandomValues( arrayCount );

    if ( resultArray.indexOf( randValue ) === -1 ) {
      resultArray.push( randValue );
    }
  }
  return resultArray;
};


/**
 * Helper.prototype.whichObjectBuild - creates objects depending a certain condition
 * @memberof Helper
 * @param  {function} tweetMethod - called when is a non-retweet
 * @see tweetMethod() => {@link Helper}.buildRetweetedObject
 * @param  {function} retweetMethod - called when is a retweet
 * @see retweetMethod() => {@link Helper}.buildRetweetedObject
 * @param  {object} tweet - Every single tweet from the API call
 * @return {object} - objecT with API values depending if is retweet or not
 */
Helper.prototype.whichObjectBuild = function( tweetMethod, retweetMethod, tweet) {

  if ( isRetweeted( tweet ) ) {
    return retweetMethod( tweet ) ;
  } else {
    return tweetMethod( tweet ) ;
  }
};


/**
 * Helper.prototype.buildToFollow - iterates an array to retrieve value depending on a index of random values
 * @memberof Helper
 * @param  {array} store       - result with custom objects after API call
 * @param  {array} randomArray - 3random values from the store length
 * @param  {array} finalStore  - array filled with "store" objects from the position equal than values from "randomArray"
 * @return {array}             "finalStore"
 */
Helper.prototype.buildToFollow = function( store, randomArray, finalStore) {
  store.forEach( ( el, ind, array ) => {

    if ( randomArray.indexOf( ind ) !== -1 ) {
      finalStore.push( array[ind] );
    }
    return finalStore;
  });
};



module.exports =  Helper;
