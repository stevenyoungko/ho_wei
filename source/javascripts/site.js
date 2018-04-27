// This is where it all goes :)
//= require test.js
$(document).ready(function() {
  $('#fullpage').fullpage({
    anchors:['firstPage', 'secondPage', 'thirdPage','fourthPage','fifthPage','sixthPage','seventhPage'],
    menu: '#js-Menu',
    // loopHorizontal: false¥
    afterLoad: function(anchorLink, index) {
      if(anchorLink !== 'firstPage') {
        $('#js-Menu').addClass('stick-to-top')
      }

      if(anchorLink === 'firstPage') {
        $('#js-Menu').removeClass('stick-to-top')
      }
    },
    

    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
      console.log( slideAnchor, slideIndex)  
      if(anchorLink === 'secondPage' && slideIndex === 0){
        $('.second .fp-prev').addClass('remove-back')
      }
      if(anchorLink === 'secondPage' && slideIndex === 1){
        $('.second .fp-prev').removeClass('remove-back')  
      }
      if(anchorLink === 'secondPage' && slideIndex === 1){
        $('.second .fp-next').addClass('remove-next') 
      }
      if(anchorLink === 'secondPage' && slideIndex === 0){
        $('.second .fp-next').removeClass('remove-next')
      }

      
      if(anchorLink === 'thirdPage' && slideIndex === 0){
        $('.third .fp-prev').addClass('remove-back')
      }
      if(anchorLink === 'thirdPage' && slideIndex === 0){
        $('.third .fp-next.remove-next').removeClass('change-next')  
      }
      if(anchorLink === 'thirdPage' && slideIndex === 0){
        $('.third .fp-next').removeClass('remove-next')
      }
      if(anchorLink === 'thirdPage' && slideIndex === 1){
        $('.third .fp-prev').removeClass('remove-back')  
      }
      if(anchorLink === 'thirdPage' && slideIndex === 1){
        $('.third .fp-next').addClass('remove-next') 
      }
      if(anchorLink === 'thirdPage' && slideIndex === 1){
        $('.third .fp-next.remove-next').addClass('change-next')  
      }
      if(anchorLink === 'thirdPage' && slideIndex === 2){
        $('.third .fp-next').addClass('remove-next') 
      }
      if(anchorLink === 'thirdPage' && slideIndex === 2){
        $('.third .fp-next.remove-next').removeClass('change-next')  
      }


      if(anchorLink === 'fourthPage' && slideIndex === 0){
        $('.fourth .fp-prev').addClass('remove-back')
      }
      if(anchorLink === 'fourthPage' && slideIndex === 1){
        $('.fourth .fp-prev').addClass('change-back')
      }
      else{
        $('.fourth .fp-prev').removeClass('change-back')
      }
      if(anchorLink === 'fourthPage' && slideIndex === 2){
        $('.fourth .fp-next').addClass('remove-next')
      }
      else{
        $('.fourth .fp-next').removeClass('remove-next')
      }
      if(anchorLink === 'fourthPage' && slideIndex === 2){
        $('.fourth .fp-next.remove-next').addClass('change-next')
      }
      if(anchorLink === 'fourthPage' && slideIndex === 2){
        $('.fourth .fp-prev').removeClass('remove-back')
      } 
    }
  });
});


