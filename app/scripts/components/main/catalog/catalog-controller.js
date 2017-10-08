function CatalogCtrl(CatalogService) {
    var catalog = this;
    catalog.entries = [];

    /*
     * Function init controller
     * */
    catalog.initPageCtrl = function () {
        catalog.entries = CatalogService.getCatalog('api/main.json');
    };


    /*
     * Init Time Tracker Controller
     * */
    catalog.initPageCtrl();
}
CatalogCtrl.$inject = ['CatalogService'];
angular.module('app').controller('CatalogCtrl', CatalogCtrl);