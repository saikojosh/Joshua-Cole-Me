/*
 * JavaScript for the page.
 */
var Global = {
	/*
	 * Global properties.
	 */
	prop: {
		$mainCard: null,
		$infoSide: null,
		$aboutSide: null,
		$aboutText: null,
		transformsSupported: false,
		aboutTextScrollFixed: false,
	},

	/*
	 * Sets up the page.
	 */
	setup: function () {
		// Cache selectors.
		Global.prop.$mainCard = $('#main > .card');
		Global.prop.$infoSide = $('#info');
		Global.prop.$aboutSide = $('#about');
		Global.prop.$aboutText = Global.prop.$aboutSide.find('.inner > .text');

		// Prevent drag & drop of images and links.
		$('img,a').on('dragstart', function () {
			return false;
		});

		// Fix the UI if CSS3 transforms aren't supported.
		Global.prop.transformsSupported = Global.isCSSTransformSupported();
		if (!Global.prop.transformsSupported) {
			// Allow the about text to scroll.
			Global.prop.$aboutText.css('overflow-y', 'auto');

			// Hide the flip button on the about side.
			Global.prop.$aboutSide.find('.inner > .button.info-link').css('visibility', 'hidden');
		}
	},

	/*
	 * Flips the card to show the about side.
	 */
	showAbout: function () {
		// Show the card first.
		Global.prop.$mainCard.addClass('flipped');

		// Fix: Only allow the about text element to scroll after the CSS animation is over.
		if (!Global.prop.aboutTextScrollFixed) {
			setTimeout(function () {
				Global.prop.$aboutText.css('overflow-y', 'auto');
				Global.prop.aboutTextScrollFixed = true;
			}, 1000 * 1.6);
		}
	},

	/*
	 * Flips the card back to the info side.
	 */
	showInfo: function () {
		Global.prop.$mainCard.removeClass('flipped');
	},

	/*
	 * Returns the property prefix if CSS transforms are supported, otherwise it
	 * returns false.
	 */
	isCSSTransformSupported: function () {
		var prefixes = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'];
		var div = document.createElement('div');

		// Test each prefix starting with the standardised one 'transform'.
		for (var i = 0, ilen = prefixes.length; i < ilen; i++) {
			if (div && typeof div.style[prefixes[i]] !== 'undefined') {
				return prefixes[i];
			}
		}

		return false;
	},
};

/*
 * Called after DOM is loaded.
 */
if (typeof jQuery !== 'undefined') {
	$(document).ready(Global.setup.bind(Global));
}
