jQuery(document).ready(function($) {
 

var $container = $('.container');

$container.masonry({
  // options
  columnWidth: 200,
  itemSelector: '.item'
});

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


  $('.modal_main textarea').on('keydown',function(){

    var count       = $(this).val().length+1,
    
    total_count     = $('.modal_footer .total_count'),
        
    actual_count    = 140-count;

    total_count.text(actual_count);

    if(actual_count<0) total_count.css('color', 'red');


    // console.log('count',count)
    // console.log('total count',total_count)
    // //console.log('total_count_val',total_count_val)
    // console.log('actual_count',actual_count)
  })

});

