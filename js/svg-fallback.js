if (!Modernizr.svg) {
    // Doesn't support SVG (Fallback)
    //http://toddmotto.com/mastering-svg-use-for-a-retina-web-fallbacks-with-png-script/
    $('img[src*="svg"]').attr('src', function() {
    	return $(this).attr('src').replace('.svg', '.png');
	});
}