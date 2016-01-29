(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

document.addEventListener('DOMContentLoaded', function () {

  console.log('DOMContentLoaded event fired');

  // Global variables
  var textAreaBodyIndex = undefined;
  var hidedButtons = undefined;

  /**
   * infinite scrolling
   **/

  // http response text from server
  function responseListenerData() {

    var parentNode = document.querySelector('.twitterFeeds');
    var newNode = document.createElement('div');
    var referenceNode = document.querySelectorAll('.twitterFeeds__tweet');
    var nodeToAppend = referenceNode[referenceNode.length - 1].nextSibling;

    newNode.classList.add('secondBatchTweets');
    newNode.innerHTML = this.responseText;

    parentNode.insertBefore(newNode, nodeToAppend);

    Array.from(document.querySelectorAll('.displayProfile-js')).forEach(function (outerEl) {

      outerEl.addEventListener('mouseover', displayProfile);
      outerEl.addEventListener('mouseout', hideProfile);
    });
  }

  // XMLHttpRequest to fetch second batch of data.
  function doHttpRequest() {
    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", responseListenerData);
    oReq.open("GET", "/secondFeed");
    oReq.send();
  }

  // check for navigator userAgent

  function whichUserAgent(navigatorObject) {

    var bodyElement = undefined;
    var checkHeight = undefined;
    var bodyScrollTop = undefined;
    var bodyHeight = undefined;
    var windowHeight = undefined;

    if (navigatorObject.userAgent.indexOf('AppleWebKit') !== -1) {
      windowHeight = window.innerHeight;
      bodyElement = document.querySelector('body');
      bodyScrollTop = bodyElement.scrollTop;
      bodyHeight = bodyElement.clientHeight;

      checkHeight = bodyHeight - windowHeight <= bodyScrollTop;
      console.log(bodyScrollTop, bodyHeight, windowHeight, 'chrome');
    } else {
      bodyElement = document.documentElement;
      bodyScrollTop = bodyElement.scrollTop;
      windowHeight = window.scrollMaxY;

      checkHeight = windowHeight <= bodyScrollTop;
      console.log(bodyScrollTop, window.scrollMaxY, 'mozilla');
    }

    return checkHeight;
  }

  // Loading infinite scroll
  function loadInfiniteScroll() {

    var checkHeight = whichUserAgent(navigator);

    if (checkHeight) {
      doHttpRequest();
    }
  }

  /**
   * Textarea tweet character count
   **/

  function getTweetWordCount() {

    var maxCount = 140;
    var currentCount = this.value.length;
    var newCount = maxCount - currentCount;
    var countSelector = this.parentNode.parentNode.querySelector('.textareaCount-js');
    var buttonSelector = this.parentNode.parentNode.querySelector('.textareaButton-js');

    countSelector.innerHTML = newCount;

    console.log(currentCount, Math.sign(currentCount), newCount, Math.sign(newCount));

    // make sure the number is positive
    if (newCount < 0 || newCount === 140) {
      buttonSelector.setAttribute('disabled', true);
      buttonSelector.removeAttribute('enabled');
    } else {
      buttonSelector.removeAttribute('disabled');
      buttonSelector.setAttribute('enabled', true);
    }

    if (newCount <= 10) {
      countSelector.classList.add('textareaCountRed');
    } else {
      countSelector.classList.remove('textareaCountRed');
    }
  }

  // Custom front page textarea to show hided buttons
  textAreaBodyIndex = document.querySelector('.textarea-js');
  hidedButtons = document.querySelector('.textareaSection-js');

  function removeHideClass() {
    textAreaBodyIndex.style.height = '80px'; // bad !!!
    hidedButtons.classList.remove('hide');
  }

  function addHideClassButton() {
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

  // Prepend the new tweet

  function addTweetToFeeds(tweetContent) {
    var newText = '<div class="twitterFeeds__userProfile profileToDisplay-js hide"><div style="background-image: url(https://pbs.twimg.com/profile_banners/223114717/1398275254)" class="twitterFeeds__userProfile--banner"></div><div class="container"><img src="http://pbs.twimg.com/profile_images/565890908088836096/D1SvBrOz_normal.jpeg" alt="rauschma profile image" class="twitterFeeds__userProfile--imageProfile"><h3 class="twitterFeeds__userProfile--user"><a href="https://twitter.com/byverdu">Albert Byverdu <span>@byverdu</span></a></h3><p class="twitterFeeds__userProfile--description">Web programmer? There is a lot to learn... and I will learn a lot @ <span class="tweetMention">@DeloitteDIGI_UK</span></p><ul class="twitterFeeds__userProfile--list"><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu">TWEETS <span>570</span></a></li><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu/following">FOLLOWING <span>56</span></a></li><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu/followers">FOLLOWERS <span>38</span></a></li></ul></div></div><div class="twitterFeeds__content"><div class="twitterFeeds__content--imgProfile"> <img src="http://pbs.twimg.com/profile_images/565890908088836096/D1SvBrOz_normal.jpeg" alt="image for rauschma" class="displayProfile-js"></div><div class="twitterFeeds__content--float"><h3 class="twitterFeeds__content--userName displayProfile-js">Albert Byverdu <span>@byverdu</span></h3><p class="twitterFeeds__content--tweetText"> ' + tweetContent + ' </p></div></div><div class="twitterFeeds__content--image"><div class="twitterFeeds__social"><ul class="twitterFeeds__social--list"><li class="twitterFeeds__social--item icon-reply"></li><li class="twitterFeeds__social--item icon-retweet"></li><li class="twitterFeeds__social--item icon-star"></li><li class="twitterFeeds__social--item">...</li></ul></div></div>';

    var twitterFeeds = document.querySelector('.twitterFeeds');
    var firstChild = document.querySelectorAll('.twitterFeeds__tweet');
    var newTweet = document.createElement('div');
    newTweet.classList.add('twitterFeeds__tweet');
    newTweet.innerHTML = newText;

    twitterFeeds.insertBefore(newTweet, firstChild[0]);
  }

  function onClickHandler() {
    var textAreaParent = this.parentNode.parentNode.parentNode.parentNode;
    var textArea = textAreaParent.querySelector('.textareaElement-js'); // more than ugly
    var textAreaValue = textArea.value;
    addTweetToFeeds(textAreaValue);
    textArea.value = '';

    if (textAreaParent.querySelector('.textarea-js') !== null) {
      addHideClassButton();
    } else {
      textAreaParent.querySelector('a[rel="modal:close"]').click();
    }

    Array.from(document.querySelectorAll('.displayProfile-js')).forEach(function (outerEl) {

      outerEl.addEventListener('mouseover', displayProfile);
      outerEl.addEventListener('mouseout', hideProfile);
    });
  }

  // Adding event listeners to elements

  Array.from(document.querySelectorAll('.textareaButton-js')).forEach(function (item) {

    item.addEventListener('click', onClickHandler);
  });

  Array.from(document.querySelectorAll('.displayProfile-js')).forEach(function (outerEl) {

    outerEl.addEventListener('mouseover', displayProfile);
    outerEl.addEventListener('mouseout', hideProfile);
  });

  Array.from(document.querySelectorAll('.textareaElement-js')).forEach(function (el) {

    el.addEventListener('keyup', getTweetWordCount);
  });

  document.addEventListener('scroll', loadInfiniteScroll);

  textAreaBodyIndex.addEventListener('focus', removeHideClass);
  textAreaBodyIndex.addEventListener('blur', addHideClassButton);
});

},{}]},{},[1]);
