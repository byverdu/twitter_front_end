'use strict';

document.addEventListener( 'DOMContentLoaded', () => {

  console.log('DOMContentLoaded event fired');

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

    parentNode.insertBefore(newNode, nodeToAppend);
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

    if ( (bodyElement.scrollHeight - bodyElement.scrollTop) <= bodyElement.clientHeight ) {
      doHttpRequest( );
    }
  }

  /**
   * Textarea count
   **/
  let textarea = Array.from(document.querySelectorAll('.textareaCount'));

  function getTweetWordCount () {

    let maxCount = 140;

    console.log(this.value.length);
  }

  textarea.forEach( (el) => {
    el.addEventListener( 'keyup', getTweetWordCount );
  });


  // Adding event listeners to elements

  document.addEventListener( 'scroll', loadInfiniteScroll );

} );
