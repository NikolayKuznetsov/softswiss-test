var headerBar = function ($window) {
    return function (scope, element, attrs) {

        angular.element($window).bind("scroll", function () {

            if (this.pageYOffset >= 100) {
                element.addClass('scrolled');
            } else {
                element.removeClass('scrolled');
            }
            scope.$apply();
        });
    };
};

angular.module('app').directive('headerBar', headerBar);
