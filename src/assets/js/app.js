$(document).foundation();

$(function(){
  setTimeout(animateLogo, 1000);
});

function animateLogo(){
  MotionUI.animateIn($('#logoWrap'), 'fade-in-slide-down-custom');
  MotionUI.animateIn($('#logo'), 'spin-custom');
}

$('#animateLogo').click(animateLogo());