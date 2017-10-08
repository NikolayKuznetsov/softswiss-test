var CardService = function () {
    // var card = this;
    //
    // card.empty = false;
    //
    // card.setStatus = function (value) {
    //     console.log('setStatus', value);
    //     card.empty = value;
    // };
    //
    // card.getStatus = function () {
    //     console.log('getStatus', card.empty);
    //     return card.empty;
    // };
    //
    // return card;

    var _list = [];

    return {
        getList: function() {
            return _list;
        },

        add: function(item) {
            _list.push(item);
            return item + ' is added';
        },

        remove: function(index) {
            var item = _list.splice(index, 1)[0];
            return item + ' has been deleted';
        }
    };
};

angular.module('app').factory('CardService', CardService);
