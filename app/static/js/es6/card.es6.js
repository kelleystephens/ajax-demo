/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(get);
  }

  function get(e){
    $.ajax({
      url:'/card',
      type: 'POST',
      success: response => {
        $('#card').css('backgroundPosition', `${response.card}px ${response.suit}px `);
      }
    });

    e.preventDefault();   //prevents default of button from submitting form info

  }
})();
