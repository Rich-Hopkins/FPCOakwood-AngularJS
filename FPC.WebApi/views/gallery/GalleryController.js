(function () {
    'use strict';

    angular
        .module('app')
        .controller('Gallery', ['dataService', Gallery]);

    function Gallery(dataService) {
        var vm = this;
        vm.index = 0;
        vm.show = [];

        vm.changeGallery = function () {
            vm.slides = vm.selectedGallery.Photos;
            vm.show = [vm.slides.length];
        };

        vm.imageClicked = function (index) {
            HideAll();
            vm.show[index] = true;

        };

        vm.plusSlides = function(n) {
            var i = vm.index + n;
            if (i > vm.slides.length - 1) {
                i = 0;
            }
            else if (i < 0) {
                i = vm.slides.length - 1;
            }
            vm.index = i;
            HideAll();
            vm.show[vm.index] = true;
        };

        function HideAll() {
            for (var i = 0; i < vm.show.length; i++) {
                vm.show[i] = false;
            }
        };

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