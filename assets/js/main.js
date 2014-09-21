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
});

