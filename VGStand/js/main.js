/******************************Login State**********************/
$(document).ready(function(){
  $('#login-trigger').click(function(){
    $(this).next('#login-content').slideToggle();
    $(this).toggleClass('active');          

    if ($(this).hasClass('active')) $(this).find('span').html('&#x25B2;')
      else $(this).find('span').html('&#x25BC;')
    })
});

/******************************Box Slider**********************/
$('.bxslider').bxSlider({
  mode: 'fade',
  captions: true
});


$(document).ready(function(){
  $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true
  });
});
 