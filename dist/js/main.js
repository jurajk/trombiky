"use strict";

(function ($) {
    var $unifiChildHeight = $(".js-unifiChildHeight");
    if ($unifiChildHeight.length > 0 && $(window).width() > 800) {
        $(window).resize(function () {
            $unifiChildHeight.each(function (index, element) {
                var $element = $(element);
                if (!$element.is(":visible")) {
                    return;
                }
                var maxHeight = 0;
                var $unifiedElements = $element.find(".js-unifiedElement");
                $unifiedElements.height("");
                $unifiedElements.each(function (index, element) {
                    var elementHeight = $(element).height();
                    if (elementHeight > maxHeight) {
                        maxHeight = elementHeight;
                    }
                });
                $unifiedElements.height(maxHeight + 50);
            });
        });

        setTimeout(function () {
            $(window).trigger("resize");
        }, 60);
    }
})(jQuery);

jQuery(document).ready(function ($) {

    /*
    * SVG 4 everybody
    */

    svg4everybody({
        polyfill: true // polyfill <use> elements for External Content
    });
});