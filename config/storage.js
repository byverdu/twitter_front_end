// storage configuration, saves Xray values
'use strict';

let storage = require('node-persist');

storage.init({
    dir:'json/',
    stringify: JSON.stringify,
    parse: JSON.parse,
    encoding: 'utf8',
    continuous: true,
    interval: false,
});

module.exports = storage;
