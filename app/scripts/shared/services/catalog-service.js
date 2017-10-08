var CatalogService = function ($http) {
    var catalog = this;

    catalog.entries = [];

    catalog.getCatalog = function (file) {
        $http.get(file).success(function (data) {
            angular.forEach(data.catalogLinkJson, function (entry) {
                $http.get(entry.url).success(function (data) {
                    data.forEach(function(item, i, data) {
                        catalog.entries.push(data[i]);
                    });
                });
            });
        });

        return catalog.entries;
    };

    return catalog;
};

CatalogService.$inject = ['$http'];
angular.module('app').service('CatalogService', CatalogService);
