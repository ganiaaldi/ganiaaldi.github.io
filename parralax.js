$(window).scroll(function(){
   var winScroll = $(this).scrollTop();
 //console.log(winScroll);
   
   //parralax
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
   
   $('.leaf1').css({
      'transform': 'translate(0,'+ winScroll / 3 +'%)'
   })
   $('.leaf2').css({
      'transform': 'translate(0,'+ winScroll / 3.2 +'%)'
   })
   $('.leaf3').css({
      'transform': 'translate(0,'+ winScroll / 3 +'%)'
   })
   $('.leaf4').css({
      'transform': 'translate(0,'+ winScroll / 4 +'%)'
   })
   $('.leaf5').css({
      'transform': 'translate(0,'+ winScroll / 5.5 +'%)'
   })
   $('.leaf6').css({
      'transform': 'translate(0,'+ winScroll / 6 +'%)'
   })
   

   //about
   if(winScroll > $('.paper').offset().top - 80){
      $('.paper').addClass('appear');
   }

   if(winScroll > $('.education').offset().top - 80){
      $('.education').addClass('appear');
   }
   });
   
   
   