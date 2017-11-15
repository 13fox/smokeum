(function ($) {
  'use strict';

  $(document).ready(function () {

     $(window).focus(function(){
          setTimeout("location.reload()",200);
          console.log('reload');
      });

   $('.product').hover(function(){
    $(this).addClass('hoverproduct');
   },function(){

    $(this).removeClass('hoverproduct');
       }
   );
      $('.icon-chevron-up').on ('click',function(){
          console.log('up');
          $(this).addClass('icon-chevron-down');
          $(this).removeClass('icon-chevron-up');
      });
      $('.icon-chevron-down').on('click',function(){
          console.log('down');
          $(this).addClass('icon-chevron-up');
          $(this).removeClass('icon-chevron-down');
      });
      window.owl = $('.owl-carousel1');
      window.owl2=$('.owl-carousel2');
      owl.owlCarousel({
          loop:true,
          navigation: true,
          responsiveClass:true,
          nav:true,
          responsive:{
              0:{
                  items:2,
                  nav:true
              },
              640:{
                  items:3,
                  navigation:true
              },
              1024:{
                  items:4,
                  nav:true,
                  loop:false
              }
          }
      });
      owl2.owlCarousel({
          loop:true,
          navigation: true,
          responsiveClass:true,
          nav:true,
          responsive:{
              0:{
                  items:2,
                  nav:true
              },
              640:{
                  items:3,
                  navigation:true
              },
              1024:{
                  items:4,
                  nav:true,
                  loop:false
              }
          }
      });
      $('#js-prev').click(function() {
          owl.trigger('prev.owl.carousel');
          return false;
      })
      $('#js-next').click(function() {
          owl.trigger('next.owl.carousel', [300]);
          return false;
      });
      $('#js-prev2').click(function() {
          owl2.trigger('prev.owl.carousel');
          return false;
      })
// Go to the previous item
      $('#js-next2').click(function() {
          owl2.trigger('next.owl.carousel', [300]);
          return false;
      });



     // $('.jqselect').styler();

  }); //end ready

}(jQuery));

