(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#roll').click(roll);
  }
  function roll(e) {
    $.ajax({
      url: '/pairs',
      type: 'POST',
      success: (function(response) {
        $('#win').text(response.win);
        $('#die1').css('background-image', ("url(../img/" + response.num1 + ".png)"));
        $('#die2').css('background-image', ("url(../img/" + response.num2 + ".png)"));
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=pairs.map
