(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#addlist').click(addlist);
  }

  function addlist(e){
    var data = $('#sumlist').serialize();  //pulls info from all fields that have been given a name

    $.ajax({  //this is an object with properties inside
      url:'/sumlist',
      type: 'POST',
      data: data,
      success: response => {
        $('#result').text(response.result);
      }
    });

    e.preventDefault();   //prevents default of button from submitting form info

  }
})();
