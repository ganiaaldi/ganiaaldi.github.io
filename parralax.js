$(window).scroll(function(){
   var winScroll = $(this).scrollTop();
   console.log(winScroll);
   
   $('.bg').css({
      'transform': 'translate(0,'+ winScroll / 6 +'%)'
   })
   $('.bg2').css({
      'transform': 'translate(0,'+ winScroll / 10 +'%)'
   })
   $('.bg3').css({
      'transform': 'translate(0,'+ winScroll / 16 +'%)'
   })
   $('.bg4').css({
      'transform': 'translate(0,'+ winScroll / 24 +'%)'
   })
   
   });
   
   
   