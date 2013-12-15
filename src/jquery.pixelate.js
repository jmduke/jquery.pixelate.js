/*!

Name: highlightReel
Dependencies: jQuery
Author: Justin Duke
Author URL: http://jmduke.com
Github URL: https://github.com/jmduke
Licensed under the MIT license

*/

;(function($) {

  $.fn.pixelate = function (options) {

    var defaults = {
      
      focus     : 0.5,

    }, settings = $.extend({}, defaults, options);

    this.each(function (index) {

      var width = this.width;
      var height = this.height;

      var idSelector = "canvas" + index;

      if ($(this).is(":visible")) {
        $(this).hide();
      } else {
        $(this).parent().children("canvas").remove();
      }
      $(this).after("<canvas id='" + idSelector + "''>");

      var idCanvas = $("#" + idSelector);

      idCanvas.get(0).width = width;
      idCanvas.get(0).height = height;

      var context = $("#" + idSelector).get(0).getContext("2d");

      var image = new Image();

      context.mozImageSmoothingEnabled = false;
      context.webkitImageSmoothingEnabled = false;
      context.imageSmoothingEnabled = false;

      image.src = this.src;
      image.onload = pixelate;

      function pixelate() {

        var el = $("#canvas" + index).get(0);

        var relativeWidth = el.width * settings.focus * 0.25;
        var relativeHeight = el.height * settings.focus * 0.25;

        context.drawImage(image, 0, 0, relativeWidth, relativeHeight);
        context.drawImage(el, 0, 0, relativeWidth, relativeHeight, 0, 0, el.width, el.height);

      }

    });

    return this;

  };

}(jQuery));