'use strict';

document.addEventListener( 'DOMContentLoaded', () => {

  console.log('DOMContentLoaded event fired');

  // Global variables
  let textAreaBodyIndex;
  let hidedButtons;

  /**
   * infinite scrolling
   **/

  // http response text from server
  function responseListenerData () {

    let parentNode = document.querySelector( '.twitterFeeds' );
    let newNode = document.createElement( 'div' );
    let referenceNode = document.querySelectorAll( '.twitterFeeds__tweet' );
    let nodeToAppend = referenceNode[referenceNode.length - 1].nextSibling;

    newNode.classList.add( 'secondBatchTweets' );
    newNode.innerHTML = this.responseText ;

    parentNode.insertBefore( newNode, nodeToAppend );

    Array.from( document.querySelectorAll('.displayProfile-js') ).forEach( (outerEl) => {

      outerEl.addEventListener( 'mouseover', displayProfile );
      outerEl.addEventListener( 'mouseout', hideProfile);
    });
  }

  // XMLHttpRequest to fetch second batch of data.
  function doHttpRequest () {
    let oReq = new XMLHttpRequest();
    oReq.addEventListener("load", responseListenerData);
    oReq.open("GET", "/secondFeed");
    oReq.send();
  }

  // Loading infinite scroll
  function loadInfiniteScroll () {
    let bodyElement;
    let checkHeight;

    if ( navigator.userAgent.indexOf( 'AppleWebKit' ) !== -1 ) {
      bodyElement = document.querySelector('body');
      let bodyHeight = bodyElement.clientHeight;
      let bodyScrollTop = bodyElement.scrollTop;
      let windowHeight = window.innerHeight;
      checkHeight = ( bodyHeight - windowHeight ) === bodyScrollTop;
    } else {
      bodyElement = document.documentElement;
      // checkHeight = ( bodyHeight - windowHeight ) === bodyScrollTop;
    }


      // console.log(bodyHeight, windowHeight,bodyScrollTop, ( bodyHeight - windowHeight ));

    if ( checkHeight ) {
      doHttpRequest();
    }
  }

  /**
   * Textarea tweet character count
   **/

  function getTweetWordCount () {

    let maxCount = 140;
    let currentCount = this.value.length;
    let newCount = ( maxCount - currentCount );
    let countSelector = this.parentNode.parentNode.querySelector( '.textareaCount-js' );
    let buttonSelector = this.parentNode.parentNode.querySelector( '.textareaButton-js' );

    countSelector.innerHTML = newCount;

    console.log(currentCount,Math.sign( currentCount ), newCount, Math.sign( newCount ) );

    // make sure the number is positive
    if ( newCount < 0 || newCount === 140 ) {
      buttonSelector.setAttribute( 'disabled', true );
      buttonSelector.removeAttribute('enabled');
    } else {
      buttonSelector.removeAttribute('disabled');
      buttonSelector.setAttribute( 'enabled', true );
    }

    if ( newCount <= 10 ) {
      countSelector.classList.add('textareaCountRed');
    } else {
      countSelector.classList.remove('textareaCountRed');
    }
  }

  // Custom front page textarea to show hided buttons
  textAreaBodyIndex = document.querySelector( '.textarea-js' );
  hidedButtons = document.querySelector('.textareaSection-js');


  function removeHideClass () {
    textAreaBodyIndex.style.height = '80px'; // bad !!!
    hidedButtons.classList.remove( 'hide' );
  }

  function addHideClassButton () {
    if ( textAreaBodyIndex.value.length === 0 ) {
      textAreaBodyIndex.style.height = '20px';
      hidedButtons.classList.add( 'hide' );
    }
  }

  // displaying user tweet profile's user

  function displayProfile() {
    let actualParentNode = this.parentNode.parentNode.parentNode; // ugly!!
    let profile = actualParentNode.querySelector('.profileToDisplay-js');
    let isRetweet =  actualParentNode.querySelector('.retweet-js');

    if (isRetweet !== null) {
      profile.style.top = '95px';
    }

    profile.classList.remove( 'hide' );
  }

  function hideProfile() {
    let actualParentNode = this.parentNode.parentNode.parentNode;
    let profile = actualParentNode.querySelector('.profileToDisplay-js');

    profile.classList.add( 'hide' );
  }

  // Prepend the new tweet

  function addTweetToFeeds( tweetContent ) {
    let newText = `<div class="twitterFeeds__userProfile profileToDisplay-js hide"><div style="background-image: url(https://pbs.twimg.com/profile_banners//223114717/1398275254)" class="twitterFeeds__userProfile--banner"></div><div class="container"><img src="http://pbs.twimg.com/profile_images/565890908088836096/D1SvBrOz_normal.jpeg" alt="rauschma profile image" class="twitterFeeds__userProfile--imageProfile"><h3 class="twitterFeeds__userProfile--user"><a href="https://twitter.com/byverdu">Axel Rauschmayer <span>@rauschma</span></a></h3><p class="twitterFeeds__userProfile--description">Web programmer? There is a lot to learn... and I will learn a lot @ <span class="tweetMention">@DeloitteDIGI_UK</span></p><ul class="twitterFeeds__userProfile--list"><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu">TWEETS <span>570</span></a></li><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu/following">FOLLOWING <span>56</span></a></li><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu/followers">FOLLOWERS <span>38</span></a></li></ul></div></div><div class="twitterFeeds__content"><div class="twitterFeeds__content--imgProfile"> <img src="http://pbs.twimg.com/profile_images/565890908088836096/D1SvBrOz_normal.jpeg" alt="image for rauschma" class="displayProfile-js"></div><div class="twitterFeeds__content--float"><h3 class="twitterFeeds__content--userName displayProfile-js">Albert Byverdu <span>@byverdu</span></h3><p class="twitterFeeds__content--tweetText"> ${ tweetContent } </p></div></div><div class="twitterFeeds__content--image"><div class="twitterFeeds__social"><ul class="twitterFeeds__social--list"><li class="twitterFeeds__social--item icon-reply"></li><li class="twitterFeeds__social--item icon-retweet"></li><li class="twitterFeeds__social--item icon-star"></li><li class="twitterFeeds__social--item">...</li></ul></div></div>`;

    let twitterFeeds = document.querySelector('.twitterFeeds');
    let firstChild =  document.querySelectorAll('.twitterFeeds__tweet');
    let newTweet = document.createElement( 'div' );
    newTweet.classList.add( 'twitterFeeds__tweet' );
    newTweet.innerHTML = newText;

    twitterFeeds.insertBefore(newTweet, firstChild[0]);
  }

  function onClickHandler() {
    let textAreaParent = this.parentNode.parentNode.parentNode.parentNode;
    let textArea = textAreaParent.querySelector( '.textareaElement-js' ); // more than ugly
    let textAreaValue = textArea.value;
    addTweetToFeeds( textAreaValue );
    textArea.value = '';

    if ( textAreaParent.querySelector( '.textarea-js' ) !== null ) {
      addHideClassButton();
    } else {
      textAreaParent.querySelector('a[rel="modal:close"]').click();
    }
  }





  // Adding event listeners to elements

  Array.from( document.querySelectorAll( '.textareaButton-js' ) ).forEach( (item) => {

    item.addEventListener('click', onClickHandler);
  });

  Array.from( document.querySelectorAll('.displayProfile-js') ).forEach( (outerEl) => {

    outerEl.addEventListener( 'mouseover', displayProfile );
    outerEl.addEventListener( 'mouseout', hideProfile );
  });

  Array.from(document.querySelectorAll( '.textareaElement-js' )).forEach( (el) => {

    el.addEventListener( 'keyup', getTweetWordCount );
  });

  document.addEventListener( 'scroll', loadInfiniteScroll );

  textAreaBodyIndex.addEventListener( 'focus', removeHideClass );
  textAreaBodyIndex.addEventListener( 'blur', addHideClassButton );

});
