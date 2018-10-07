$(document).ready(function() {

  $("a.btn").click(function(event) {
    event.preventDefault();
    $(".jumbotron").toggle('pulsate',1400); // jQuery UI effect 'pulsate'
    $('h1').text('Hello there!');
  });

  $('.jumbotron').hide().delay(500).fadeIn(1400);

  // jQuery UI Widgets

  $( "#tabs" ).tabs();
  $( "#accordion" ).accordion();

});
s
