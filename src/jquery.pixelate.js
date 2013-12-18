/*!

Name: highlightReel
Dependencies: jQuery
Author: Justin Duke
Author URL: http://jmduke.com
Github URL: https://github.com/jmduke
Licensed under the MIT license

*/

(function($) {



  $.fn.pixelate = function (options) {

    // TODO:  There's, like, definitely more customization that we could do here.
    var defaults = {
      
      focus           : 0.5,
      canvasID  : "pCanvas"

    }, settings = $.extend({}, defaults, options);

    this.each(function (index) {

      // Since we pretty much remove the <img> element from the picture pretty quickly, we need to
      // capture the important attributes before anything else.
      var width = this.width;
      var height = this.height;

      var idSelector = "#" + settings.canvasID + index;

      // Hide the image itself, since we're transposing over it.
      $(this).hide();

      // Edge case: in multiple invocations of pixelate(), be sure to get rid of previous attempts.
      $(this).parent().children("canvas").remove();

      $(this).after("<canvas id='" + idSelector.slice(1) + "''>");

      $(idSelector).get(0).width = width;
      $(idSelector).get(0).height = height;

      var context = $(idSelector).get(0).getContext("2d");

      // This is how the whole thing works.
      context.imageSmoothingEnabled = false;
      context.mozImageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;

      function pixelate(image) {

        var el = $("#" + settings.canvasID + index).get(0);

        var relativeWidth = el.width * settings.focus * 0.25;
        var relativeHeight = el.height * settings.focus * 0.25;

        context.drawImage(image, 0, 0, relativeWidth, relativeHeight);
        context.drawImage(el, 0, 0, relativeWidth, relativeHeight, 0, 0, el.width, el.height);

      }

      pixelate(this);

    });

    return this;

  };

}(jQuery));