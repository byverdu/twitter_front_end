'use strict';
/**
 * responseListenerData - callback passed to de xhrHttp request,
 * selects the DOM element, which will be used to append the response text
 *
 * @return {void}  void
 */
function responseListenerData () {

  let parentNode = document.querySelector( '.twitterFeeds' );
  let newNode = document.createElement( 'div' );
  let referenceNode = document.querySelectorAll( '.twitterFeeds__tweet' );
  let nodeToAppend = referenceNode[referenceNode.length - 1].nextSibling;

  newNode.classList.add( 'secondBatchTweets' );
  newNode.innerHTML = this.responseText ;

  parentNode.insertBefore( newNode, nodeToAppend );

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
function doHttpRequest () {
  let oReq = new XMLHttpRequest();
  oReq.addEventListener("load", responseListenerData);
  oReq.open("GET", "/secondFeed");
  oReq.send();

  console.log('call doHttpRequest');
}

export { doHttpRequest };
