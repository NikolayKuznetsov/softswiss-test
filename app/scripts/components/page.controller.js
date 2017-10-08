function PageCtrl() {
    var page = this;
    page.name = 'Name';

}
PageCtrl.$inject = [];
angular.module('app').controller('PageCtrl', PageCtrl);