var CardService = function () {

    var _list = [];

    return {
        getList: function () {
            return _list;
        },

        add: function (item) {
            var counter = false;
            angular.forEach(_list, function (value, key) {
                if (_list[key].id == item.id) {
                    _list[key].cardCount++;
                    counter = true;
                }
            });

            if (!counter) {
                item.cardCount = 1;
                _list.push(item);
            }
            return item + ' is added';
        },

        removeIndex: function (index) {
            var item = _list.splice(index, 1)[0];
            return item + ' has been deleted';
        },

        removeItem: function (item) {
            angular.forEach(_list, function (value, key) {
                if (_list[key].id == item.id) {
                   _list.splice(key, 1)[0]
                }
            });
        }
    };
};

angular.module('app').factory('CardService', CardService);
