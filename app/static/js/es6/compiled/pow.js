(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#exp').click(exp);
  }
  function exp(e) {
    var data = $('#power').serialize();
    console.log(data);
    $.ajax({
      url: '/power',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#result').text(response.result);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=pow.map
