function CatalogCtrl(CatalogService, CardService) {
    var catalog = this;
    catalog.entries = [];
    catalog.action = [];
    catalog.checkbox = {};
    catalog.floorIncludes = [];

    /*
     * Function init controller
     * */
    catalog.initPageCtrl = function () {
        catalog.entries = CatalogService.getCatalog('api/main.json');
    };

    /*
     * Add floor
     * */
    catalog.includeFloor = function(floor) {
        var i = $.inArray(floor, catalog.floorIncludes);
        if (i > -1) {
            catalog.floorIncludes.splice(i, 1);
        } else {
            catalog.floorIncludes.push(floor);
        }
    };

    /*
    * Filter floor
    * */
    catalog.floorFilter = function(catalogs) {
        if (catalog.floorIncludes.length > 0) {
            if ($.inArray(catalogs.floor, catalog.floorIncludes) < 0)
                return;
        }

        return catalogs;
    };

    /*
    * Filter floor
    * */
    catalog.clearFloorFilter = function() {
        catalog.floorIncludes = [];
        catalog.checkbox = {};
    };

    /*
    * Add
    * */
    catalog.addCard = function(id) {
        catalog.action[id] = catalog.action[id] ? false : true;
        CardService.add(id);
    };


    /*
     * Init Catalog Controller
     * */
    catalog.initPageCtrl();

}
CatalogCtrl.$inject = ['CatalogService', 'CardService'];
angular.module('app').controller('CatalogCtrl', CatalogCtrl);