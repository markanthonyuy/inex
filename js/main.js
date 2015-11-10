(function($) {
  
  console.log('Hooray!');

  /*$('.main-slideshow-nav').on('click', function(e) {
    var _this = $(this),
      target = _this.data('target');

    if(_this.hasClass('active')) return;

    $('.main-slideshow-nav').removeClass('active');
    _this.addClass('active');

    $('.main-slideshow-content').removeClass('active');
    $($('.main-slideshow-content')[target - 1]).addClass('active');
  });

  setInterval(function() {
    if(!$('.main-slideshow-nav.active').next().length) {
      $($('.main-slideshow-nav')[0]).trigger('click');
      return;
    }
    $('.main-slideshow-nav.active').next().trigger('click');
  }, 5000);*/

  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: 'slide',
    controlNav: false,
    animationLoop: false,
    slideshow: true,
    slideshowSpeed: 3000,
    animationSpeed: 1000,
    itemWidth: 300,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: 'slide',
    controlNav: false,
    animationLoop: false,
    directionNav: false,
    slideshow: true,
    slideshowSpeed: 3000,
    animationSpeed: 1000,
    sync: '#carousel'
  });

})(jQuery);