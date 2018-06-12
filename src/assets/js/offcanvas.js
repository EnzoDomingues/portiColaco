$(function(){

  $('.toggle-nav').click(function(e) {
    e.stopPropagation();
    toggleNav();
  });

  $('.main').click(function (e){
    var target = $(e.target);
    if(!target.closest('.nav').length && $('body').hasClass('show-nav')) toggleNav();
  });

function toggleNav(){
  if($('body').hasClass('show-nav')){
    $('body').removeClass('show-nav');
  }
  else{
    $('body').addClass('show-nav');
  }
}

});

