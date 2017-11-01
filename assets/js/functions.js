(function ($) {
  'use strict';

  $(document).ready(function () {

      $(window).focus(function(){
          setTimeout("location.reload()",200);
          console.log('reload');
      });


  }); //end ready

}(jQuery));

