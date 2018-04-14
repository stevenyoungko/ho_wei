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
         $('.second-bg-image .fp-prev').addClass('remove-back')
       }
       if(anchorLink === 'secondPage' && slideIndex === 1){
         $('.second-bg-image .fp-prev').removeClass('remove-back')  
       }
       if(anchorLink === 'secondPage' && slideIndex === 1){
        $('.second-bg-image .fp-next').addClass('remove-next') 
       }
       if(anchorLink === 'secondPage' && slideIndex === 0){
        $('.second-bg-image .fp-next').removeClass('remove-next')
       }

       if(anchorLink === 'thirdPage' && slideIndex === 0){
        $('.third-page .fp-prev').addClass('remove-back')
       }
       if(anchorLink === 'thirdPage' && slideIndex === 0){
        $('.third-page .fp-next.remove-next').removeClass('change-next')  
       }
       if(anchorLink === 'thirdPage' && slideIndex === 0){
        $('.third-page .fp-next').removeClass('remove-next')
       }
       if(anchorLink === 'thirdPage' && slideIndex === 1){
        $('.third-page .fp-prev').removeClass('remove-back')  
       }
       if(anchorLink === 'thirdPage' && slideIndex === 1){
        $('.third-page .fp-next').addClass('remove-next') 
       }
       if(anchorLink === 'thirdPage' && slideIndex === 1){
        $('.third-page .fp-next.remove-next').addClass('change-next')  
       }
       if(anchorLink === 'thirdPage' && slideIndex === 2){
        $('.third-page .fp-next').addClass('remove-next') 
       }
       if(anchorLink === 'thirdPage' && slideIndex === 2){
        $('.third-page .fp-next.remove-next').removeClass('change-next')  
       }
     }
  });
});
