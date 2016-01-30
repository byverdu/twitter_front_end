(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Prepend the new tweet

Object.defineProperty(exports, "__esModule", {
  value: true
});
function addTweetToFeeds(tweetContent) {
  var newText = '<div class="twitterFeeds__userProfile profileToDisplay-js hide"><div style="background-image: url(https://pbs.twimg.com/profile_banners/223114717/1398275254)" class="twitterFeeds__userProfile--banner"></div><div class="container"><img src="http://pbs.twimg.com/profile_images/565890908088836096/D1SvBrOz_normal.jpeg" alt="rauschma profile image" class="twitterFeeds__userProfile--imageProfile"><h3 class="twitterFeeds__userProfile--user"><a href="https://twitter.com/byverdu">Albert Byverdu <span>@byverdu</span></a></h3><p class="twitterFeeds__userProfile--description">Web programmer? There is a lot to learn... and I will learn a lot @ <span class="tweetMention">@DeloitteDIGI_UK</span></p><ul class="twitterFeeds__userProfile--list"><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu">TWEETS <span>570</span></a></li><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu/following">FOLLOWING <span>56</span></a></li><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu/followers">FOLLOWERS <span>38</span></a></li></ul></div></div><div class="twitterFeeds__content"><div class="twitterFeeds__content--imgProfile"> <img src="http://pbs.twimg.com/profile_images/565890908088836096/D1SvBrOz_normal.jpeg" alt="image for rauschma" class="displayProfile-js"></div><div class="twitterFeeds__content--float"><h3 class="twitterFeeds__content--userName displayProfile-js">Albert Byverdu <span>@byverdu</span></h3><p class="twitterFeeds__content--tweetText"> ' + tweetContent + ' </p></div></div><div class="twitterFeeds__content--image"><div class="twitterFeeds__social"><ul class="twitterFeeds__social--list"><li class="twitterFeeds__social--item icon-reply"></li><li class="twitterFeeds__social--item icon-retweet"></li><li class="twitterFeeds__social--item icon-star"></li><li class="twitterFeeds__social--item">...</li></ul></div></div>';

  var twitterFeeds = document.querySelector('.twitterFeeds');
  var allChilds = document.querySelectorAll('.twitterFeeds__tweet');
  var newTweet = document.createElement('div');

  newTweet.classList.add('twitterFeeds__tweet');
  newTweet.innerHTML = newText;

  twitterFeeds.insertBefore(newTweet, allChilds[0]);
}

exports.addTweetToFeeds = addTweetToFeeds;

},{}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkHeightBody = undefined;

var _userAgent = require('./userAgent');

/**
 * checkHeightBody - Calls isFirefoxAgent, isWebKitAgent or isOldInternetExplorer dependig on userAgent
 *
 * @param  {Object} navigatorObject navigator Object
 * @return {Boolean} -
 */
function checkHeightBody(navigatorObject) {

  var checkHeight = undefined;
  var actualUserAgent = (0, _userAgent.whichUserAgent)(navigatorObject);

  switch (actualUserAgent) {

    // Firefox
    case 'Firefox':
      checkHeight = (0, _userAgent.isFirefoxAgent)();
      break;

    // Chrome, Safari, IE Edge
    case 'AppleWebKit':
      checkHeight = (0, _userAgent.isWebKitAgent)();
      break;

    // IE old versions
    case 'Trident':
      checkHeight = (0, _userAgent.isOldInternetExplorer)();
      break;
  }

  return checkHeight;
}

exports.checkHeightBody = checkHeightBody;

},{"./userAgent":5}],3:[function(require,module,exports){
'use strict';
//  removes hidden buttons from index page textarea

Object.defineProperty(exports, "__esModule", {
  value: true
});
function removeHideClassButton(textAreaBodyIndex, hidedButtons) {
  textAreaBodyIndex.style.height = '80px'; // bad !!!
  hidedButtons.classList.remove('hide');
}

function addHideClassButton(textAreaBodyIndex, hidedButtons) {
  if (textAreaBodyIndex.value.length === 0) {
    textAreaBodyIndex.style.height = '20px';
    hidedButtons.classList.add('hide');
  }
}

// displaying user tweet profile's user

function displayProfile() {
  var actualParentNode = this.parentNode.parentNode.parentNode; // ugly!!
  var profile = actualParentNode.querySelector('.profileToDisplay-js');
  var isRetweet = actualParentNode.querySelector('.retweet-js');

  if (isRetweet !== null) {
    profile.style.top = '95px';
  }

  profile.classList.remove('hide');
}

function hideProfile() {
  var actualParentNode = this.parentNode.parentNode.parentNode;
  var profile = actualParentNode.querySelector('.profileToDisplay-js');

  profile.classList.add('hide');
}

exports.removeHideClassButton = removeHideClassButton;
exports.addHideClassButton = addHideClassButton;
exports.hideProfile = hideProfile;
exports.displayProfile = displayProfile;

},{}],4:[function(require,module,exports){
'use strict';
/**
 * responseListenerData - callback passed to de xhrHttp request,
 * selects the DOM element, which will be used to append the response text
 *
 * @return {void}  void
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function responseListenerData() {

  var parentNode = document.querySelector('.twitterFeeds');
  var newNode = document.createElement('div');
  var referenceNode = document.querySelectorAll('.twitterFeeds__tweet');
  var nodeToAppend = referenceNode[referenceNode.length - 1].nextSibling;

  newNode.classList.add('secondBatchTweets');
  newNode.innerHTML = this.responseText;

  parentNode.insertBefore(newNode, nodeToAppend);

  // Array.from( document.querySelectorAll('.displayProfile-js') ).forEach( (outerEl) => {
  //
  //   outerEl.addEventListener( 'mouseover', displayProfile );
  //   outerEl.addEventListener( 'mouseout', hideProfile);
  // });
}

/**
 * doHttpRequest - calls file to append
 *
 */
function doHttpRequest() {
  var oReq = new XMLHttpRequest();
  oReq.addEventListener("load", responseListenerData);
  oReq.open("GET", "/secondFeed");
  oReq.send();

  console.log('call doHttpRequest');
}

exports.doHttpRequest = doHttpRequest;

},{}],5:[function(require,module,exports){
'use strict';

/**
 * whichUserAgent - Extracts a string for a later reference from the window.userAgent
 *
 * @param  {Object} navigatorObject - browser navigator Object
 * @return {String} - navigator.userAgent from user visitor's
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
function whichUserAgent(navigatorObject) {

  var userAgent = navigatorObject.userAgent.split(' ');
  var userAgentString = ['Firefox', 'AppleWebKit', 'Trident'];
  var actualUserAgent = '';

  userAgent.map(function (outerEl, index, array) {
    userAgentString.map(function (innerEl) {

      if (outerEl.indexOf(innerEl) !== -1) {
        actualUserAgent = array[index].split('/').shift();
      }
    });
  });

  return actualUserAgent;
}

/**
 * isFirefoxAgent - Custom DOM elements selection depending userAgent,
 * checks if content is reaching the bottom
 *
 * @return {Boolean}  window height smaller or equal to body scrolled height
 */
function isFirefoxAgent() {
  var bodyScrollHeight = document.documentElement.scrollTop;
  var windowHeight = window.scrollMaxY;
  return windowHeight <= bodyScrollHeight;
}

/**
 * isWebKitAgent - Custom DOM elements selection depending userAgent,
 * checks if content is reaching the bottom
 *
 * @return {Boolean}  window height smaller or equal to body scrolled height
 */
function isWebKitAgent() {
  var bodyElement = document.body;
  var windowHeight = window.innerHeight;
  var bodyScrollHeight = bodyElement.scrollTop;
  var bodyHeight = bodyElement.clientHeight;

  return bodyHeight - windowHeight <= bodyScrollHeight;
}

/**
 * isOldInternetExplorer - Custom DOM elements selection depending userAgent,
 * checks if content is reaching the bottom
 *
 * @return {Boolean}  window height smaller or equal to body scrolled height
 */
function isOldInternetExplorer() {
  var windowHeight = window.innerHeight;
  var bodyScrollTop = document.documentElement.scrollTop;
  var bodyHeight = document.body.clientHeight;

  return bodyHeight - windowHeight <= bodyScrollTop;
}

exports.whichUserAgent = whichUserAgent;
exports.isFirefoxAgent = isFirefoxAgent;
exports.isWebKitAgent = isWebKitAgent;
exports.isOldInternetExplorer = isOldInternetExplorer;

},{}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function getTweetWordCount() {

  var maxCount = 140;
  var currentCount = this.value.length;
  var newCount = maxCount - currentCount;
  var countSelector = this.parentNode.parentNode.querySelector('.textareaCount-js');
  var buttonSelector = this.parentNode.parentNode.querySelector('.textareaButton-js');

  countSelector.innerHTML = newCount;

  // make sure the number is positive
  if (newCount < 0 || newCount === 140) {
    buttonSelector.setAttribute('disabled', true);
  } else {
    buttonSelector.removeAttribute('disabled');
  }

  if (newCount <= 10) {
    countSelector.classList.add('textareaCountRed');
  } else {
    countSelector.classList.remove('textareaCountRed');
  }
}

exports.getTweetWordCount = getTweetWordCount;

},{}],7:[function(require,module,exports){
'use strict';

var _httpRequest = require('../../modules/httpRequest');

var _checkHeight = require('../../modules/checkHeight');

var _wordCount = require('../../modules/wordCount');

var _hideShowMethods = require('../../modules/hideShowMethods');

var _addTweet = require('../../modules/addTweet');

document.addEventListener('DOMContentLoaded', function () {

  console.log('DOMContentLoaded event fired');

  /// Custom front page textarea to show hided buttons
  var textAreaBodyIndex = document.querySelector('.textarea-js');
  var hidedButtons = document.querySelector('.textareaSection-js');

  function handleRemoveHideClass() {
    (0, _hideShowMethods.removeHideClassButton)(textAreaBodyIndex, hidedButtons);
  }

  function handleAddHideClass() {
    (0, _hideShowMethods.addHideClassButton)(textAreaBodyIndex, hidedButtons);
  }

  // Loading infinite scroll
  function handleLoadInfiniteScroll() {

    var checkHeight = (0, _checkHeight.checkHeightBody)(navigator);

    if (checkHeight) {
      (0, _httpRequest.doHttpRequest)();
    }
  }

  // adding new tweet
  function onClickHandler() {
    var textAreaParent = this.parentNode.parentNode.parentNode.parentNode;
    var textArea = textAreaParent.querySelector('.textareaElement-js'); // more than ugly
    var textAreaValue = textArea.value;
    (0, _addTweet.addTweetToFeeds)(textAreaValue);
    textArea.value = '';

    if (textAreaParent.querySelector('.textarea-js') !== null) {
      handleAddHideClass();
    } else {
      textAreaParent.querySelector('a[rel="modal:close"]').click();
    }

    Array.from(document.querySelectorAll('.displayProfile-js')).forEach(function (outerEl) {

      outerEl.addEventListener('mouseover', _hideShowMethods.displayProfile);
      outerEl.addEventListener('mouseout', _hideShowMethods.hideProfile);
    });
  }

  // Adding event listeners to elements

  Array.from(document.querySelectorAll('.textareaButton-js')).forEach(function (item) {

    item.addEventListener('click', onClickHandler);
  });

  Array.from(document.querySelectorAll('.displayProfile-js')).forEach(function (outerEl) {

    outerEl.addEventListener('mouseover', _hideShowMethods.displayProfile);
    outerEl.addEventListener('mouseout', _hideShowMethods.hideProfile);
  });

  Array.from(document.querySelectorAll('.textareaElement-js')).forEach(function (el) {

    el.addEventListener('keyup', _wordCount.getTweetWordCount);
  });

  document.addEventListener('scroll', handleLoadInfiniteScroll);

  textAreaBodyIndex.addEventListener('focus', handleRemoveHideClass);
  textAreaBodyIndex.addEventListener('blur', handleAddHideClass);
});

},{"../../modules/addTweet":1,"../../modules/checkHeight":2,"../../modules/hideShowMethods":3,"../../modules/httpRequest":4,"../../modules/wordCount":6}]},{},[7]);
