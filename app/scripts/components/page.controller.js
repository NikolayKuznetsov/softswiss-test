function PageCtrl(ScrollService, ConfigService) {
    var page = this;
    page.name = 'Name';
    page.scroll = {
        block: '.filter__box',
        offset: ConfigService.mobileSizeScreenCheck() ? 60 : 80,
        duration: 800
    };

    /*
     * Scrolling to the catalog
     * */
    page.scrollCatalog = function () {
        ScrollService.scrollTo(page.scroll.block, page.scroll.offset, page.scroll.duration);
    };

}
PageCtrl.$inject = ['ScrollService', 'ConfigService'];
angular.module('app').controller('PageCtrl', PageCtrl);