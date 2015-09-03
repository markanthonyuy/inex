(function($) {
	

	console.log('Hooray!');


	$('.main-slideshow-nav').on('click', function(e) {
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
	}, 5000);

})(jQuery);