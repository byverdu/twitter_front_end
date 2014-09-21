jQuery(document).ready(function($) {
 
  $(window).scroll(function()
  {
      if($(window).scrollTop() == $(document).height() - $(window).height())
      {
          $('div#loadmoreajaxloader').show();
          $.ajax({
          url: "index_2.html",
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

    
    navigator.geolocation.getCurrentPosition(function(pos) {
      
      geocoder = new google.maps.Geocoder();
      
      var latlng = new google.maps.LatLng(pos.coords.latitude,pos.coords.longitude);
      
      geocoder.geocode({'latLng': latlng}, function(results, status) {
          

        if (status == google.maps.GeocoderStatus.OK) {

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









});

  // navigator.geolocation.getCurrentPosition(show_map)
  
  // function show_map(position) {
  // var latitude = position.coords.latitude;
  // var longitude = position.coords.longitude;
  
  // $('.modal_main textarea').text(longitude +' ' +latitude)

  // console.log(latitude,longitude)
  // }
