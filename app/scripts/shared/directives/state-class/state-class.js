var stateClass = function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            scope.$on('$stateChangeStart', function (event, toState) {
                element.attr('class', _.kebabCase(toState.name + '-state'));
            })
        }
    }
};

angular.module('app').directive('stateClass', stateClass);
