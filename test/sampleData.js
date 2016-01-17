'use strict';

module.exports = () => {
  let tweet0 = {
    created_at: 'Fri Jan 15 15:32:41 +0000 2016',
    id: 688020988429267000,
    id_str: '688020988429266948',
    text: 'Feature Request: iCloud Photo Library needs a purge downloads button à la Google Photos https://t.co/LATDJ6z7Em https://t.co/Kpr2A6ZwVI',
    source: '<a href="https://about.twitter.com/products/tweetdeck" rel="nofollow">TweetDeck</a>',
    truncated: false,
    in_reply_to_status_id: null,
    in_reply_to_status_id_str: null,
    in_reply_to_user_id: null,
    in_reply_to_user_id_str: null,
    in_reply_to_screen_name: null,
    user: {
      id: 15944436,
      id_str: '15944436',
      name: '9to5Mac ',
      screen_name: '9to5mac',
      location: 'Cupertino, California',
      description: 'We break Apple News. Tips@9to5mac.com http://t.co/08acwjc8Rl and http://t.co/0nnwbET9zQ for the best gear and deals.',
      url: 'http://t.co/TJfPn7EXwx',
      entities: {
        url: [Object],
        description: [Object]
      },
      protected: false,
      followers_count: 320051,
      friends_count: 13,
      listed_count: 11103,
      created_at: 'Fri Aug 22 13:06:35 +0000 2008',
      favourites_count: 205,
      utc_offset: -28800,
      time_zone: 'Pacific Time (US & Canada)',
      geo_enabled: true,
      verified: false,
      statuses_count: 37830,
      lang: 'en',
      contributors_enabled: false,
      is_translator: false,
      is_translation_enabled: false,
      profile_background_color: '636363',
      profile_background_image_url: 'http://abs.twimg.com/images/themes/theme9/bg.gif',
      profile_background_image_url_https: 'https://abs.twimg.com/images/themes/theme9/bg.gif',
      profile_background_tile: false,
      profile_image_url: 'http://pbs.twimg.com/profile_images/659486593649012736/-TGFT8rs_normal.png',
      profile_image_url_https: 'https://pbs.twimg.com/profile_images/659486593649012736/-TGFT8rs_normal.png',
      profile_link_color: '2FC2EF',
      profile_sidebar_border_color: '181A1E',
      profile_sidebar_fill_color: '252429',
      profile_text_color: '666666',
      profile_use_background_image: false,
      has_extended_profile: false,
      default_profile: false,
      default_profile_image: false,
      following: true,
      follow_request_sent: false,
      notifications: false
    },
    geo: null,
    coordinates: null,
    place: null,
    contributors: null,
    is_quote_status: false,
    retweet_count: 5,
    favorite_count: 7,
    entities: {
      hashtags: [],
      symbols: [],
      user_mentions: [],
      urls: [
        [Object]
      ],
      media: [
        [Object]
      ]
    },
    extended_entities: {
      media: [
        [Object]
      ]
    },
    favorited: false,
    retweeted: false,
    possibly_sensitive: false,
    possibly_sensitive_appealable: false,
    lang: 'en'
  };

  let tweet1 = { created_at: 'Fri Jan 15 17:10:03 +0000 2016',
  id: 688045494480846800,
  id_str: '688045494480846848',
  text: 'Disassembling JavaScript\'s IIFE Syntax: https://t.co/CLLFISF082 https://t.co/nj4EtNl2uZ',
  source: '<a href="http://bufferapp.com" rel="nofollow">Buffer</a>',
  truncated: false,
  in_reply_to_status_id: null,
  in_reply_to_status_id_str: null,
  in_reply_to_user_id: null,
  in_reply_to_user_id_str: null,
  in_reply_to_screen_name: null,
  user:
   { id: 459275531,
     id_str: '459275531',
     name: 'JavaScript Live',
     screen_name: 'JavaScriptDaily',
     location: '',
     description: 'Daily JavaScript community news, links and events.',
     url: 'http://t.co/yTZ4fsOxGj',
     entities: { url: [Object], description: [Object] },
     protected: false,
     followers_count: 182680,
     friends_count: 40,
     listed_count: 4355,
     created_at: 'Mon Jan 09 13:43:05 +0000 2012',
     favourites_count: 2,
     utc_offset: null,
     time_zone: null,
     geo_enabled: false,
     verified: false,
     statuses_count: 5100,
     lang: 'en',
     contributors_enabled: false,
     is_translator: false,
     is_translation_enabled: false,
     profile_background_color: '51CBBF',
     profile_background_image_url: 'http://pbs.twimg.com/profile_background_images/558331836/jsbg.png',
     profile_background_image_url_https: 'https://pbs.twimg.com/profile_background_images/558331836/jsbg.png',
     profile_background_tile: true,
     profile_image_url: 'http://pbs.twimg.com/profile_images/612958776312905729/1D6mR9eF_normal.png',
     profile_image_url_https: 'https://pbs.twimg.com/profile_images/612958776312905729/1D6mR9eF_normal.png',
     profile_banner_url: 'https://pbs.twimg.com/profile_banners/459275531/1433778003',
     profile_link_color: '177A6E',
     profile_sidebar_border_color: 'F0EDDA',
     profile_sidebar_fill_color: 'FDFFF0',
     profile_text_color: '333333',
     profile_use_background_image: true,
     has_extended_profile: false,
     default_profile: false,
     default_profile_image: false,
     following: true,
     follow_request_sent: false,
     notifications: false },
  geo: null,
  coordinates: null,
  place: null,
  contributors: null,
  is_quote_status: false,
  retweet_count: 11,
  favorite_count: 18,
  entities:
   { hashtags: [],
     symbols: [],
     user_mentions: [],
     urls: [ [Object] ],
     media: [ [Object] ] },
  extended_entities: { media: [ [Object] ] },
  favorited: false,
  retweeted: false,
  possibly_sensitive: false,
  possibly_sensitive_appealable: false,
  lang: 'en'
};

let convert4digitNumber = ( number ) => {
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

let getRandomValues = ( array ) => {
  let arrayLength = array.length;
  let resultValue = Math.floor( Math.random() * ( arrayLength - 0) + 0 );
  return resultValue;
};

  return {
    tweet0: tweet0,
    tweet1: tweet1,
    convert4digitNumber: convert4digitNumber,
    getRandomValues:getRandomValues
  };
};
