$(document).ready(function(){

  $('.hire-me').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
  });

  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });

  $('#contact-form').on('submit', function(event) {
    event.preventDefault();
    var form = $(this);
    var fd = new FormData();
    fd.append("name", $("#name").val());
    fd.append("email", $("#email").val());
    fd.append("message", $("#message").val());

    $.ajax({
      url: form.attr('action'),
      processData: false,
      contentType: false,
      type: 'POST',
      data: fd,
      error: function(req, err){
        console.log('error message: ' + err);
      },
      success: function() {
        console.log("Success")
      }
    })
    this.reset()
  });

});