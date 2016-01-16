'use strict';

function Helper() {}

Helper.prototype.buildTweetObject = ( tweet ) => {

  let backgroundImage = tweet.user.profile_banner_url || 'images/defaultBackground.jpg';
  let convert4digitNumber = new HelperNumber().convert4digitNumber;
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

function HelperNumber() {}

HelperNumber.prototype.convert4digitNumber = ( number ) => {
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
};

module.exports =  Helper;
