// jQuery(document).ready(function($) {
  
//   var $container = $('#container');

//   $container.imagesLoaded(function(){
//     $container.masonry({
//       itemSelector: '.box',
//       columnWidth: 100
//     });
//   });

//   $container.infinitescroll({
//     navSelector  : '#page-nav',    // selector for the paged navigation
//     nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
//     itemSelector : '.box',     // selector for all items you'll retrieve
//     loading: {
//         finishedMsg: 'No more pages to load.',
//         img: 'http://i.imgur.com/6RMhx.gif'
//       }
//     },
//     // trigger Masonry as a callback
//     function( newElements ) {
//       // hide new items while they are loading
//       var $newElems = $( newElements ).css({ opacity: 0 });
//       // ensure that images load before adding to masonry layout
//       $newElems.imagesLoaded(function(){
//         // show elems now they're ready
//         $newElems.animate({ opacity: 1 });
//         $container.masonry( 'appended', $newElems, true );
//       });
//     }
//   );
// });
/*
var $container = $('#container');
// initialize
$container.masonry({
  columnWidth: 200,
  itemSelector: '.item'
});
*/
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

  // $container.infinitescroll({
  //   navSelector  : '#page-nav',    // selector for the paged navigation
  //   nextSelector : '#page-nav a',  // selector for the NEXT link (to page 2)
  //   itemSelector : '.item',     // selector for all items you'll retrieve
  //   loading: {
  //       finishedMsg: 'No more pages to load.',
  //       img: 'http://i.imgur.com/6RMhx.gif'
  //     }
  //   },
  //   // trigger Masonry as a callback
  //   function( newElements ) {
  //     // hide new items while they are loading
  //     var $newElems = $( newElements ).css({ opacity: 0 });
  //     // ensure that images load before adding to masonry layout
  //     $newElems.imagesLoaded(function(){
  //       // show elems now they're ready
  //       $newElems.animate({ opacity: 1 });
  //       $container.masonry( 'appended', $newElems, true );
  //     });
  //   }
  // );
});

