function CatalogCtrl(CatalogService, CardService) {
    var catalog = this;
    catalog.entries = [];
    catalog.active = [];
    catalog.checkbox = {};
    catalog.floorIncludes = [];
    catalog.showSelectSize = [];
    catalog.selectedSizeValue = [];

    /*
     * Function init controller
     * */
    catalog.initPageCtrl = function () {
        catalog.entries = CatalogService.getCatalog('api/main.json');
    };

    /*
     * Add floor
     * */
    catalog.includeFloor = function (floor) {
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
    catalog.floorFilter = function (catalogs) {
        if (catalog.floorIncludes.length > 0) {
            if ($.inArray(catalogs.floor, catalog.floorIncludes) < 0)
                return;
        }

        return catalogs;
    };

    /*
     * Filter floor
     * */
    catalog.clearFloorFilter = function () {
        catalog.floorIncludes = [];
        catalog.checkbox = {};
    };

    /*
     * Add
     * */
    catalog.addCard = function (item) {
        if (!catalog.showSelectSize[item.id]) {
            catalog.active[item.id] = catalog.active[item.id] ? false : true;
            return catalog.active[item.id] ? CardService.add(item) : CardService.removeItem(item);
        }
    };

    /*
     * Open Select Size
     * */
    catalog.openSelectSize = function (id) {
        catalog.showSelectSize[id] = catalog.showSelectSize[id] ? false : true;
    };

    /*
     * Selected Size
     * */
    catalog.selectedSize = function (id, value) {
        catalog.selectedSizeValue[id] = value;
        catalog.openSelectSize(id);
    };


    /*
     * Init Catalog Controller
     * */
    catalog.initPageCtrl();

}
CatalogCtrl.$inject = ['CatalogService', 'CardService'];
angular.module('app').controller('CatalogCtrl', CatalogCtrl);