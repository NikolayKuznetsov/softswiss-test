function PageCtrl($http) {
    var page = this;
    page.name = 'Name';

    page.entries = [];
    $http.get('api/main.json').success(function (data) {
        angular.forEach(data.catalogLinkJson, function (entry) {
            $http.get(entry.url).success(function (data) {
                data.forEach(function(item, i, data) {
                    page.entries.push(data[i]);
                });
            });
        });
    });
}

angular.module('app').controller('PageCtrl', PageCtrl);