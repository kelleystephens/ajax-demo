(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#roll').click(roll);
  }
  function roll(e) {
    $.ajax({
      url: '/dice',
      type: 'POST',
      success: (function(response) {
        var num = response.side;
        $('#die').css('background-image', ("url(../img/" + num + ".png)"));
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=dice.map
