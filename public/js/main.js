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
    var something = this;
    fd.append("name", $("#name").val());
    fd.append("email", $("#email").val());
    fd.append("message", $("#message").val());
    reset = function(){
      something.reset();
    };

    $.ajax({
      url: form.attr('action'),
      processData: false,
      contentType: false,
      type: 'POST',
      data: fd,
      error: function(req, err){
        console.log('error message: ' + err);
        $(".form-message-box").addClass('alert alert-danger');
        $(".form-message-box").html("Sorry something went wrong, please try again");
        $(".form-message-box").animate({"opacity":"1"},"slow").animate({"opacity":"0"},2000);
      },
      success: function() {
        console.log("Success");
        $(".form-message-box").addClass('alert alert-success');
        $(".form-message-box").html("Successful!");
        $(".form-message-box").animate({"opacity":"1"},"slow").animate({"opacity":"0"},2000);
        reset();
      }
    });
  });

});