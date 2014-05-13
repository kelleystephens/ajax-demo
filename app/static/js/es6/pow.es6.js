(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#exp').click(exp);
  }

  function exp(e){
    var data = $('#power').serialize();  //pulls info from all fields that have been given a name
    console.log(data);

    $.ajax({  //this is an object with properties inside
      url:'/power',
      type: 'POST',
      data: data,
      success: response => {
        $('#result').text(response.result);
      }
    });

    e.preventDefault();   //prevents default of button from submitting form info

  }
})();
