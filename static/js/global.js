/*
 * JavaScript for the page.
 */
var Global = {

  /*
   * Global properties.
   */
  prop: {
    $mainCard:            null,
    $aboutText:           null,
    aboutTextScrollFixed: false
  },

  /*
   * Sets up the page.
   */
  setup: function () {

    // Cache selectors.
    Global.prop.$mainCard  = $('#main > .card');
    Global.prop.$aboutText = $('#about > .inner > .text');

    // Prevent drag & drop of images and links.
    $('img,a').on('dragstart', function () { return false; });

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
      }, (1000 * 1.6));
    }

  },

  /*
   * Flips the card back to the info side.
   */
  showInfo: function () {
    Global.prop.$mainCard.removeClass('flipped');
  }

};

/*
 * Called after DOM is loaded.
 */
if (typeof jQuery !== 'undefined') {
  $(document).ready(Global.setup.bind(Global));
}