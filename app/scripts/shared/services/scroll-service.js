var ScrollService = function ($document) {

    var scroll = this;

    scroll.defaultDuration = 500;
    scroll.defaultOffset = 0;

    scroll.scrollTo = function (elementSelector, offset, duration, parentSelector) {
        var element = (elementSelector.startsWith('.') || elementSelector.startsWith('#')) ? angular.element(elementSelector) : angular.element('#' + elementSelector);

        var scrollOffset = offset ? offset : scroll.defaultOffset;
        var scrollDuration = duration ? duration : scroll.defaultDuration;
        $document.scrollToElementAnimated(element, scrollOffset, scrollDuration);
    };

    return scroll;
};

ScrollService.$inject = ['$document'];
angular.module('app').service('ScrollService', ScrollService);


