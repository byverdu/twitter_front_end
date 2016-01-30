'use strict';

// Prepend the new tweet

function addTweetToFeeds( tweetContent ) {
  let newText = `<div class="twitterFeeds__userProfile profileToDisplay-js hide"><div style="background-image: url(https://pbs.twimg.com/profile_banners/223114717/1398275254)" class="twitterFeeds__userProfile--banner"></div><div class="container"><img src="http://pbs.twimg.com/profile_images/565890908088836096/D1SvBrOz_normal.jpeg" alt="rauschma profile image" class="twitterFeeds__userProfile--imageProfile"><h3 class="twitterFeeds__userProfile--user"><a href="https://twitter.com/byverdu">Albert Byverdu <span>@byverdu</span></a></h3><p class="twitterFeeds__userProfile--description">Web programmer? There is a lot to learn... and I will learn a lot @ <span class="tweetMention">@DeloitteDIGI_UK</span></p><ul class="twitterFeeds__userProfile--list"><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu">TWEETS <span>570</span></a></li><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu/following">FOLLOWING <span>56</span></a></li><li class="twitterFeeds__userProfile--item"><a href="https://twitter.com/byverdu/followers">FOLLOWERS <span>38</span></a></li></ul></div></div><div class="twitterFeeds__content"><div class="twitterFeeds__content--imgProfile"> <img src="http://pbs.twimg.com/profile_images/565890908088836096/D1SvBrOz_normal.jpeg" alt="image for rauschma" class="displayProfile-js"></div><div class="twitterFeeds__content--float"><h3 class="twitterFeeds__content--userName displayProfile-js">Albert Byverdu <span>@byverdu</span></h3><p class="twitterFeeds__content--tweetText"> ${ tweetContent } </p></div></div><div class="twitterFeeds__content--image"><div class="twitterFeeds__social"><ul class="twitterFeeds__social--list"><li class="twitterFeeds__social--item icon-reply"></li><li class="twitterFeeds__social--item icon-retweet"></li><li class="twitterFeeds__social--item icon-star"></li><li class="twitterFeeds__social--item">...</li></ul></div></div>`;

  let twitterFeeds = document.querySelector('.twitterFeeds');
  let allChilds =  document.querySelectorAll('.twitterFeeds__tweet');
  let newTweet = document.createElement( 'div' );

  newTweet.classList.add( 'twitterFeeds__tweet' );
  newTweet.innerHTML = newText;

  twitterFeeds.insertBefore(newTweet, allChilds[0]);
}

export { addTweetToFeeds };
