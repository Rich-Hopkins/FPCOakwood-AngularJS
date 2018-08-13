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
                vm.selectedGallery = vm.galleryList[0];
            },
                function (error) {
                    console.log(error);
                });
        vm.selectedPhoto = null;
        return vm;
    }


})();