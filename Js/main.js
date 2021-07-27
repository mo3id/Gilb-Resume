
//Change Header On Scroll

$(window).on('scroll', function(){

  var  winTop = $(window).scrollTop();

    if (winTop >= 5) {

          $('.main-header').addClass('fixed').removeClass('top');
    
        } else if (winTop <= 0) {
          
          $('.main-header').addClass('top').removeClass('fixed');    
      
        }
  });




