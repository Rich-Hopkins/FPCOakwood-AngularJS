(function () {
    'use strict';

    angular
        .module('app')
        .controller('Gallery', ['dataService', Gallery]);

    function Gallery(dataService) {
        var vm = this;

        vm.changeGallery = function () {
            vm.slides = vm.selectedGallery.Photos;
        }

        dataService.getData('gallery')
            .then(function (data) {
                vm.galleryList = data;
                vm.selectedGallery = vm.galleryList[0];
                vm.slides = vm.selectedGallery.Photos;
            },
                function (error) {
                    console.log('Error: ' + error);
                });
        return vm;
    }


})();