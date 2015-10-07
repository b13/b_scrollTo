/*!
 * b_scrollTo
 * Copyright (c) 2015 b:dreizehn GmbH
 * Licensed under MIT
 * @projectDescription Minimal js jQuery scrolling module.
 * @author Benjamin Gröner
 * @version 0.1.0
 */

;(function(factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof module !== 'undefined' && module.exports) {
		// CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Global
		factory(jQuery);
	}
})(function($){
	'use strict';

	$.scrollToPixel = function(height, duration){
		var deferred = $.Deferred();

		if(duration == 0 || duration === false){
			$('html, body').scrollTop(height);
			deferred.resolve();
		} else {
			$('html, body').stop().animate({
				scrollTop: height + 'px'
			}, duration || 500, 'swing', function() { deferred.resolve() });
		}
		return deferred.promise();
	};

	$.scrollTo = function(element, duration, offset){
		return $(element).scrollTo(duration, offset);
	};

	$.fn.scrollTo = function(duration, offset){
		var deferred = $.Deferred();
		if (this.length > 0) {
			return $.scrollToPixel($(this).offset().top - (offset || 0));
		} else {
			return $.Deferred().reject().promise();
		}
	};

});