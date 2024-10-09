// WAYPOINTS
$(function() {
  
    $('.waitingFor-animationFade').addClass('animationFade');

  // $('#hello').waypoint(function() {
  //   $('#hello .underline').addClass('active');
  // }, {
  //   offset: '85%'
  // });

  $('#offering').waypoint(function() {
    $('#offering').addClass('animated');
  }, {
    offset: '85%'
  });

  $('#w5').waypoint(function() {
    $('#w5').addClass('animated');
  }, {
    offset: '85%'
  });
  $('#w6').waypoint(function() {
    $('#w6').addClass('animated');
  }, {
    offset: '85%'
  });
  
});

$('#emailToCopy').on( "click tap",function() {
  var copyText = 'roberto.unsettled@gmail.com';
  navigator.clipboard.writeText(copyText);

  $('#emailToCopy').addClass('copied');
  setTimeout(function() {
    $('#emailToCopy').removeClass('copied');
   }, 2000);

});