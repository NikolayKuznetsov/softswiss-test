var CardService = function () {

    var card = this;
    var _list = [];

    card.getList = function () {
        return _list;
    };

    card.add = function (item) {
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
    };

    card.removeIndex = function (index) {
        return _list.splice(index, 1)[0];
    };

    card.removeItem = function (item) {
        angular.forEach(_list, function (value, key) {
            if (_list[key].id == item.id) {
                return _list.splice(key, 1)[0];
            }
        });
    };

    return card;
};

angular.module('app').service('CardService', CardService);
