var HeaderCtrl = function (CardService) {
    var header = this;
    header.list = CardService.getList();

    /*
     * Function init controller
     * */
    header.initHederCtrl = function () {
        // header.cardStatus = CardService.getStatus();
    };


    /*
     * Init Header Controller
     * */
    header.initHederCtrl();

};

HeaderCtrl.$inject = ['CardService'];
angular.module('app').controller('HeaderCtrl', HeaderCtrl);