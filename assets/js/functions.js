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



  }); //end ready

}(jQuery));

