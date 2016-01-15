'use strict';

function Helper() {}

Helper.prototype.buildTweetObject = ( tweet ) => {

  let backgroundImage = tweet.user.profile_banner_url || 'images/defaultBackground.jpg';

  return {
    text: tweet.text,
    name: tweet.user.name,
    description: tweet.user.description,
    screen_name: tweet.user.screen_name,
    profile_image_url: tweet.user.profile_image_url,
    profile_banner_url: backgroundImage,
    followers_count: tweet.user.followers_count,
    friends_count: tweet.user.friends_count,
    statuses_count: tweet.user.statuses_count
  };
};

module.exports =  Helper;
