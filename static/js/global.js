/*
 * JavaScript for the page.
 */
var Global = {

  /*
   * Global properties.
   */
  prop: {

  },

  /*
   * Sets up the page.
   */
  setup: function () {

    // Cache selectors.
    Global.prop.$mainCard = $('#main > .card');

  },

  /*
   * Flips the card to show the about side.
   */
  showAbout: function () {
    Global.prop.$mainCard.addClass('flipped');
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