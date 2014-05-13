(function() {
  'use strict';
  $(document).ready(init);
  function init() {
    $('#addlist').click(addlist);
  }
  function addlist(e) {
    var data = $('#sumlist').serialize();
    $.ajax({
      url: '/sumlist',
      type: 'POST',
      data: data,
      success: (function(response) {
        $('#result').text(response.result);
      })
    });
    e.preventDefault();
  }
})();

//# sourceMappingURL=sumlist.map
