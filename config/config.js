module.exports = {
  twitterAPI: {
    consumer_key:    process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token:    process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET,
  },

  urlAPI: 'statuses/home_timeline',
  queryAPI: { q: 'byverdu', count: 25 }
};
