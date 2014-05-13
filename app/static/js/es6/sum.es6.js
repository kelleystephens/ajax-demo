(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#add').click(add);
  }

  function add(e){
    var data = $('#sum').serialize();  //pulls info from all fields that have been given a name
    console.log(data);

    $.ajax({  //this is an object with properties inside
      url:'/sum',
      type: 'POST',
      data: data,
      success: response => {
        $('#result').text(response.sum);
      }
    });

    e.preventDefault();   //prevents default of button from submitting form info

  }
})();
