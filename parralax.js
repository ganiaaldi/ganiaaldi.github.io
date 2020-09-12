$(window).scroll(function(){
   var winScroll = $(this).scrollTop();
   console.log(winScroll);
   

   $('.bg2').css({
      'transform': 'translate(0,'+ winScroll / 6 +'%)'
   })
   $('.bg4').css({
      'transform': 'translate(0,'+ winScroll / 24 +'%)'
   })
   
   });
   
   
   