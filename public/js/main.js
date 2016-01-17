jQuery(document).ready(function($) {

  $(window).scroll(function()
  {
      if($(window).scrollTop() == $(document).height() - $(window).height())
      {
          $('div#loadmoreajaxloader').show();
          $.ajax({
          url: "/secondFeed",
          success: function(html)
          {
              if(html)
              {
                  $("#postswrapper").append(html);
                  $('div#loadmoreajaxloader').hide();
              }else
              {
                  $('div#loadmoreajaxloader').html('<center>No more posts to show.</center>');
              }
          }
          });
      }
  });

  /* Modal window */

  //Textarea
  $('.modal_main textarea').on('keyup',function(){

    var count, total_count, actual_count;

    count        = $(this).val().length;

    total_count  = $('.modal_footer .total_count');

    actual_count = (140-count);

    total_count.text(actual_count);

    if(actual_count<0) total_count.css('color', 'red');

    $('button.send_tweet').css('opacity', '1');
    $('button.send_tweet').attr('disabled', false)

    if(actual_count===140){

      $('button.send_tweet').css('opacity', '0.4');
      $('button.send_tweet').attr('disabled', true)
    }

  })

  // Hiding input
  $('.hide_input').on('click',function(){
    $('.modal_footer input').click()
  })


  // Getting Geolocation

  $('.icon-location').on('click', function(){

    console.log('ok')

    navigator.geolocation.getCurrentPosition(function(pos) {

      geocoder = new google.maps.Geocoder();

      var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);

      geocoder.geocode({'latLng': latlng}, function(results, status) {


        if (status == google.maps.GeocoderStatus.OK) {

          console.log(google.maps.GeocoderStatus)

          var result, city, longo, i, address

          result = results[0];

          city = "";

          len=result.address_components.length;

          for(i=0; i<len; i++) {

            address = result.address_components[i];

            if(address.types.indexOf("locality") >= 0) city = address.long_name;

            //if(address.types.indexOf("administrative_area_level_1") >= 0) state = address.long_name;
          }

          $('.modal_footer button span').eq(1).text(city);
          $('.modal_footer button').eq(1).css({
            background: '#F5FAFC',
            borderColor: 'rgba(0,132,180,.5)',
            borderRadius: '5px',
          });

          $('.modal_main textarea').keyup()

          console.log("Hello to you out there in "+city);
        }
      })
    })
  })


  $('.tweet').hover(function() {

    $(this).css('background-color','#F5F8FA');
    $(this).find('.social_area li').css('color', '#8899A6');
  }, function() {
     $(this).css('background-color','white');
    $(this).find('.social_area li').css('color', '#E1E8ED');
  });



  $('.send_tweet').on('click',function(){

    var tweet,loc,content,img,social_area;

    img = '<img src="https://pbs.twimg.com/profile_images/450573642121109504/ZoIKuh46_bigger.jpeg">';
    social_area = '<div class="social_area"><ul><li class="icon-reply">Reply</li><li class="icon-retweet">Retweet</li><li class="icon-star">Favorite</li><li>... More</li></ul></div>';

    tweet = $('#ex1 textarea').val();

    content = '<div class="tweet_content"><h3>Byverdu<span> @Byverdu</span></h3><p>'+tweet+'</p></div>';

    loc = $('.icon-location span').text();

    $('.close-modal').trigger('click');

    if(loc!=='Add Location'){

        $('.tweet').first().before('<div class="tweet">'+img+content+social_area+'<p class="loc_class">Send it from '+loc+'</p></div>');

    } else $('.tweet').first().before('<div class="tweet">'+img+content+social_area+'</div>');

    console.log('tweet ->',tweet,'loc->,',loc)
    tweet = $('#ex1 textarea').val(' ');

    $('.modal_footer .total_count').text(140);

  })




  // <div class="tweet">

  //       <div class="retweet">
  //         <span class="icon-retweet"></span><span>Byverdu retweeted</span>
  //       </div>

  //       <img src="https://pbs.twimg.com/profile_images/430574860146720768/Yhs4a60S_bigger.jpeg">

  //       <div class="tweet_content">
  //         <h3>Nicole Sullivan  <span>@stubbornella</span> </h3>
  //         <p>Who says I don't need a felt kindling tote? <a href="https://twitter.com/hashtag/hipsterangst?src=hash">#hipster</a></p>
  //       </div>

  //       <div class="social_area">
  //         <ul>
  //           <li class="icon-reply">Reply</li>
  //           <li class="icon-retweet">Retweet</li>
  //           <li class="icon-star">Favorite</li>
  //           <li>... More</li>
  //         </ul>
  //       </div>

  //     </div>




});

  // navigator.geolocation.getCurrentPosition(show_map)

  // function show_map(position) {
  // var latitude = position.coords.latitude;
  // var longitude = position.coords.longitude;

  // $('.modal_main textarea').text(longitude +' ' +latitude)

  // console.log(latitude,longitude)
  // }
