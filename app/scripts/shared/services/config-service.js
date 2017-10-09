var ConfigService = function () {
    var config = this;

    config.mobileSizeScreen = 992;

    config.mobileSizeScreenCheck = function () {
        return window.innerWidth < config.mobileSizeScreen;
    };

    return config;
};

ConfigService.$inject = [];
angular.module('app').service('ConfigService', ConfigService);
