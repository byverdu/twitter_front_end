'use strict';

document.addEventListener( 'DOMContentLoaded', () => {

  console.log('DOMContentLoaded event fired');

  // Global variables
  let textArea;
  let textAreaBodyIndex;
  let hidedButtons;

  /**
   * infinite scrolling
   **/

  // http response text from server
  function requestListenerData () {

    let parentNode = document.querySelector( '.twitterFeeds' );
    let newNode = document.createElement( 'div' );
    let referenceNode = document.querySelectorAll( '.twitterFeeds__tweet' );
    let nodeToAppend = referenceNode[referenceNode.length - 1].nextSibling;

    newNode.setAttribute( 'class', 'secondBatchTweets' );
    newNode.innerHTML = this.responseText ;

    parentNode.insertBefore( newNode, nodeToAppend );
  }

  // XMLHttpRequest to fetch second batch of data.
  function doHttpRequest () {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", requestListenerData);
    oReq.open("GET", "/secondFeed");
    oReq.send();
  }

  // Loading infinite scroll
  function loadInfiniteScroll () {
    let bodyElement = document.querySelector('body');
    let allTweets = document.querySelectorAll( '.twitterFeeds__tweet' );
    let bodyScrollTop = bodyElement.scrollTop;
    let lasTweetHeight = allTweets[ allTweets.length - 1 ].clientHeight;

    if ( bodyScrollTop >= lasTweetHeight && bodyScrollTop <= (lasTweetHeight + 100) ) {
      doHttpRequest();
    }
  }

  /**
   * Textarea tweet character count
   **/
  textArea = Array.from(document.querySelectorAll('.textareaSection-js'));

  function getTweetWordCount () {

    let maxCount = 140;
    let currentCount = this.value.length;
    let newCount = ( maxCount - currentCount );
    let countSelector = this.parentNode.parentNode.querySelector( '.textareaCount-js' );
    let buttonSelector = this.parentNode.parentNode.querySelector( '.textareaButton-js' );
    console.log(currentCount, newCount);

    countSelector.innerHTML = newCount;

    if ( currentCount > 0) {
      buttonSelector.removeAttribute('disabled');
    } else {
      buttonSelector.setAttribute( 'disabled', 'enabled');
    }

    if ( newCount <= 10 ) {
      countSelector.classList.add('textareaCountRed');
    } else {
      countSelector.classList.remove('textareaCountRed');
    }
  }

  textAreaBodyIndex = document.querySelector( '.twitterNewTweet__wrapper--input textarea' );
  hidedButtons = document.querySelector('.twitterNewTweet__wrapper--body');


  function removeHideClass () {
    textAreaBodyIndex.style.height = '80px'; // bad !!!
    hidedButtons.classList.remove( 'hide' );
  }

  function addHideClass () {
    if ( textAreaBodyIndex.value.length === 0 ) {
      textAreaBodyIndex.style.height = '35px';
      hidedButtons.classList.add( 'hide' );
    }
  }


  // Adding event listeners to elements

  textArea.forEach( (el) => {
    el.addEventListener( 'keyup', getTweetWordCount );
  });
  document.addEventListener( 'scroll', loadInfiniteScroll );
  textAreaBodyIndex.addEventListener( 'focus', removeHideClass );
  textAreaBodyIndex.addEventListener( 'blur', addHideClass );

} );
