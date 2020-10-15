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


   var aldiScroll = $(this).scrollTop() - 4000;
   $('.aldi').css({
      'transform': 'translate(0,'+ aldiScroll/ 14 +'%)'
   })
   

   //about
   if(winScroll > $('.paper').offset().top - 10){
      $('.paper').addClass('appear');
   }


   //education
   if(winScroll > $('.education').offset().top - 10){
      $('.education').addClass('appear');
   }

   //certif & awards
   if(winScroll > $('.scrollpaper').offset().top - 10){
      $('.paperLeft').addClass('appear');
      $('.paperRight').addClass('appear');
   }

   //experience
   if(winScroll > 4000){
      $('.exptitle').addClass('appear');
   }
   if(winScroll > 4200){
      $('.work1').addClass('appear');
   }
   if(winScroll > 4500){
      $('.work2').addClass('appear');
   }

      //skill
      if(winScroll > 4700){
         $('.skilltitle').addClass('appear');
      }
      if(winScroll > 5000){
         $('.skillboard').addClass('appear');
      }
   });
   
   
   