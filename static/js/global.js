if ( typeof DEBUG === 'undefined' ) DEBUG = true;

var Global = {

  /*
   * Global properties.
   */
  prop: {

  },

  /*
   * Sets up the class.
   */
  setup: function () {

    // Check until the iframe exists
    setTimeout(function checkTwitter() {
      if (typeof $('#blkTwitter iframe')[0] === 'undefined') {
        setTimeout(checkTwitter, 10);
      }
      else {
        setTimeout(Global.onTwitterLoad, 100);
      }
    }, 10);


  },

  /*
   * Hides the loader and shows the twitter iframe.
   */
  onTwitterLoad: function () {

    $('#blkTwitter .loader').css('display', 'none');
    $('#blkTwitter .inner').css('visibility', 'visible');

  }

};


/*
 * Called after DOM is loaded.
 */
if (typeof jQuery !== 'undefined') $(document).ready(Global.setup.bind(Global));