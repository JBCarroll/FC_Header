
// ACTIVATE MOBILE MENU
$(function(){
  if ($(window).width() < 620) {
    $('.nav-menu, .alt-container').addClass('hidden');
    $('#mobile-container').removeClass('hidden');

  }else if($(window).width() > 620){
    $('.nav-menu, .alt-container').removeClass('hidden');
    $('#mobile-container').addClass('hidden');
  }

  $('.menu_open').click(function(){
    $('.menu_open').addClass('hidden');
    $('.menu_close').removeClass('hidden');
  });
  $('.menu_close').click(function(){
    $('.menu_open').removeClass('hidden');
    $('.menu_close').addClass('hidden');
  });

  $('.menu_open, .menu_close').click(function(){
    $('.mobile-menu-container').toggle();
  });

  $('.menu_open').click(function(){
    mobile_anim.play();
  });
  $('.menu_close').click(function(){
    mobile_anim.reverse();
  });


  var mobile_anim = gsap.timeline({duration: .5, paused: true});
  mobile_anim.fromTo('.mobile-menu-container',1,{
      y: -600,
      display: "flex",
  },{
    y: 0,
    display: "flex",
  })
});


// CALCULATE TOP FOR SLIDE
var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop,
  isVisible = true;

function show(){
  if(!isVisible){
    TweenLite.to("#header-container", .5, {y: 0, ease:Power4.ease, position: "fixed" },0);
    isVisible = true;
  }
}

function hide(){
  if(isVisible){
    TweenLite.to("#header-container", 1,{ease:Power4.ease, position: "absolute", y: -500, ease:Power4.ease}, 1);

    TweenLite.to("#header-container", 1,{ease:Power4.ease, y: 0, ease:Power4.ease,delay: .45, position: "fixed"},1);
    isVisible = false;
  }
}

function refresh() {
  var newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (newScrollTop > currentScrollTop) {
    hide();
  } else if (newScrollTop < currentScrollTop) {
    show();
  }
  currentScrollTop = newScrollTop;
}

window.addEventListener("scroll", refresh, {
  passive: true
});
refresh();