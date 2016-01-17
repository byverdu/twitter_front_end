'use strict';

function Helper() {}

Helper.prototype.buildTweetObject = ( tweet ) => {

  let backgroundImage = tweet.user.profile_banner_url || 'images/defaultBackground.jpg';
  let tweetImage;

  if ( tweet.entities.hasOwnProperty( 'media' ) ) {
    tweetImage = tweet.entities.media[0].media_url;
  } else {
    tweetImage = '';
  }

  return {
    text: tweet.text,
    tweetImage: tweetImage,
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

Helper.prototype.buildUserObject = ( user ) => {

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

Helper.prototype.arrayRandomValues = ( array ) => {
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

Helper.prototype.buildToFollow = ( store, randomArr, finalStore) => {
  store.forEach( ( el, ind, arr ) => {
    
    if ( randomArr.indexOf( ind ) !== -1 ) {
      finalStore.push( arr[ind] );
    }
  });
};

function getRandomValues( totalCount ) {
  let resultValue = Math.floor( Math.random() * ( totalCount - 0) + 0 );
  return resultValue;
}

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

module.exports =  Helper;
