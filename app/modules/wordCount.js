'use strict';

function getTweetWordCount () {

  let maxCount = 140;
  let currentCount = this.value.length;
  let newCount = ( maxCount - currentCount );
  let countSelector = this.parentNode.parentNode.querySelector( '.textareaCount-js' );
  let buttonSelector = this.parentNode.parentNode.querySelector( '.textareaButton-js' );

  countSelector.innerHTML = newCount;

  // make sure the number is positive
  if ( newCount < 0 || newCount === 140 ) {
    buttonSelector.setAttribute( 'disabled', true );
  } else {
    buttonSelector.removeAttribute('disabled');
  }

  if ( newCount <= 10 ) {
    countSelector.classList.add('textareaCountRed');
  } else {
    countSelector.classList.remove('textareaCountRed');
  }
}

export { getTweetWordCount };
