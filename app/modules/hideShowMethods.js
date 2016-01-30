'use strict';
//  removes hidden buttons from index page textarea
function removeHideClassButton ( textAreaBodyIndex, hidedButtons ) {
  textAreaBodyIndex.style.height = '80px'; // bad !!!
  hidedButtons.classList.remove( 'hide' );
}

function addHideClassButton ( textAreaBodyIndex, hidedButtons ) {
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

export { removeHideClassButton, addHideClassButton, hideProfile, displayProfile };
