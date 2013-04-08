(function ($) {
	'use strict';

	/**
	 * Add a "slide" class to all elements matched by the selector.
	 */
	var addSlideClassTo = function (sel) {
		$(sel).addClass('slide');
	};

	/**
	 * Remove whitespace at the start and end of <pre><code> blocks.
	 */
	var trimPreCode = function () {
		$('pre > code').each(function (idx, code) {
			var $code = $(code);
			$code.html($.trim($code.html()));
		});
	};

	var functions = {
		addSlideClassTo: addSlideClassTo,
		trimPreCode:     trimPreCode
	};

	// If there already is a “scyDeck” object, merge with it and allow it to
	// overwrite our own properties.
	if (typeof window.scyDeck != 'object') {
		window.scyDeck = {};
	}
	var scyDeck = window.scyDeck = $.extend({}, functions, window.scyDeck);

	// Automatically run things that are configured.
	if (typeof scyDeck.conf == 'object') {
		var conf = scyDeck.conf;
		if (conf.addSlideClassTo) {
			scyDeck.addSlideClassTo(conf.addSlideClassTo);
		}
		if (conf.trimPreCode) {
			scyDeck.trimPreCode();
		}
		if (conf.initDeck) {
			var what = (conf.initDeck === true) ? '.slide' : conf.initDeck;
			$(function () {
				$.deck(what);
			});
		}
	}
})(jQuery);
