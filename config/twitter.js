// module.exports = () => {
//   'use strict';
//   let Twit = require('twit');
//   let config = require('./config');
//
//   let T = new Twit( config.twitterAPI );
//   let twitObject = {};
//
//
//   T.get('statuses/home_timeline', { q: 'byverdu', count: 100 }, (err, data, response) => {
//     // console.log(data);
//     twitObject.user = data[0].created_at;
//     console.log(twitObject, 'inseide');
//   });
//   console.log(twitObject);
// };

// let config = require('./config');
// let Twit = require('twit');
//
// export default class {
//     get (url, data) {
//         return new Promise((resolve, reject) => {
//             let T = new Twit( config.twitterAPI );
//
//             T(url, data)((error, result) => {
//                 if (error) {
//                     console.log(error, 'Promise erororor');
//                     reject(error);
//                 }
//                 else {
//                     resolve(result);
//                     console.log(resolve, 'Promise rersrrsrsrseser');
//                 }
//             });
//         });
//     }
// }
