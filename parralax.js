$(window).scroll(function(){
   var winScroll = $(this).scrollTop();
   console.log(winScroll);
   

   $('.sun').css({
      'transform': 'translate(0,'+ winScroll / 8 +'%)'
   })
   $('.cloud1').css({
      'transform': 'translate(0,'+ winScroll / 12 +'%)'
   })
   $('.land4').css({
      'transform': 'translate(0,'+ winScroll / 18 +'%)'
   })
   $('.land3').css({
      'transform': 'translate(0,'+ winScroll / 24 +'%)'
   })
   $('.land2').css({
      'transform': 'translate(0,'+ winScroll / 24 +'%)'
   })
   $('.land').css({
      'transform': 'translate(0,'+ winScroll / 30 +'%)'
   })
   
   
   });
   
   
   