(function () {
    'use strict';

    angular
        .module('app')
        .controller('Gallery', ['dataService', Gallery]);

    function Gallery(dataService) {
        var vm = this;
        dataService.getData('gallery')
            .then(function (data) {
                vm.galleryList = data;
                console.log(vm.galleryList);
            },
                function (error) {
                    console.log(error);
                });

        return vm;
    }


})();