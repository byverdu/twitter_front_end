'use strict';

import { doHttpRequest } from '../../modules/httpRequest';
import { checkHeightBody } from '../../modules/checkHeight';
import { getTweetWordCount } from '../../modules/wordCount';
import { removeHideClassButton, addHideClassButton, displayProfile, hideProfile } from '../../modules/hideShowMethods';
import { addTweetToFeeds } from '../../modules/addTweet';

document.addEventListener( 'DOMContentLoaded', () => {

  console.log('DOMContentLoaded event fired');

  /// Custom front page textarea to show hided buttons
  let textAreaBodyIndex = document.querySelector( '.textarea-js' );
  let hidedButtons = document.querySelector('.textareaSection-js');

  function handleRemoveHideClass() {
    removeHideClassButton( textAreaBodyIndex, hidedButtons );
  }

  function handleAddHideClass() {
    addHideClassButton( textAreaBodyIndex, hidedButtons );
  }

  // Loading infinite scroll
  function handleLoadInfiniteScroll () {

    let checkHeight = checkHeightBody( navigator );

    if ( checkHeight ) {
      doHttpRequest();
    }
  }

  // adding new tweet
  function onClickHandler() {
    let textAreaParent = this.parentNode.parentNode.parentNode.parentNode;
    let textArea = textAreaParent.querySelector( '.textareaElement-js' ); // more than ugly
    let textAreaValue = textArea.value;
    addTweetToFeeds( textAreaValue );
    textArea.value = '';

    if ( textAreaParent.querySelector( '.textarea-js' ) !== null ) {
      handleAddHideClass();
    } else {
      textAreaParent.querySelector('a[rel="modal:close"]').click();
    }

    Array.from( document.querySelectorAll('.displayProfile-js') ).forEach( (outerEl) => {

      outerEl.addEventListener( 'mouseover', displayProfile );
      outerEl.addEventListener( 'mouseout', hideProfile );
    });
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

  document.addEventListener( 'scroll', handleLoadInfiniteScroll );

  textAreaBodyIndex.addEventListener( 'focus', handleRemoveHideClass );
  textAreaBodyIndex.addEventListener( 'blur', handleAddHideClass );

});
