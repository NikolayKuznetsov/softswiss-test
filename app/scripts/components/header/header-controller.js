var HeaderCtrl = function (CardService) {
    var header = this;
    header.list = CardService.getList();
    header.showDropDown = false;

    /*
     * Function init controller
     * */
    header.initHederCtrl = function () {
    };

    /*
     *  DropDown Card
     * */
    header.openDropDownCard = function () {
        if (header.list.length > 0) {
            header.showDropDown = !header.showDropDown;
        }
    };

    /*
     *  Total Card
     * */
    header.totalCard = function () {
        var total = 0;

        angular.forEach(header.list, function (value, key) {
            total += header.list[key].price * header.list[key].cardCount;
        });

        return total;
    };

    /*
     * Init Header Controller
     * */
    header.initHederCtrl();

};

HeaderCtrl.$inject = ['CardService'];
angular.module('app').controller('HeaderCtrl', HeaderCtrl);