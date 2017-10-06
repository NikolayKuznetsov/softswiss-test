angular.module('app').config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    var header = {
        templateUrl: 'scripts/components/header/header-index.html',
        controller: 'HeaderCtrl',
        controllerAs: 'header'
    };
    var footer = {
        templateUrl: 'scripts/components/footer/footer-index.html',
        controller: 'FooterCtrl',
        controllerAs: 'footer'
    };

    // $locationProvider.hashPrefix('');
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('index', {
            url: '/',
            views: {
                'main': {
                    templateUrl: 'scripts/components/main/main-index.html'
                },
                'header': header,
                'footer': footer
            }
        });

    $locationProvider.html5Mode(true);
});