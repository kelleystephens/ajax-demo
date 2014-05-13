/* jshint unused:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#roll').click(roll);
  }

  function roll(e){
    $.ajax({
      url:'/dice',
      type: 'POST',
      success: response => {
        var num = response.side;
        $('#die').css('background-image', `url(../img/${num}.png)`);
      }
    });

    e.preventDefault();   //prevents default of button from submitting form info

  }
})();
