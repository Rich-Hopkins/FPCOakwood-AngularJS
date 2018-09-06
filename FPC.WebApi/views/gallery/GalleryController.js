(function () {
    'use strict';

    angular
        .module('app')
        .controller('Gallery', ['dataService', Gallery]);

    function Gallery(dataService) {
        var vm = this;

        dataService.getData('imgur')
            .then(function (data) {
                vm.galleryList = data;
                vm.selectedGallery = vm.galleryList[0];
                vm.slides = vm.selectedGallery.Images;
                vm.index = 0;
            },
                function (error) {
                    console.log('Error: ' + error);
                });

        vm.showPicture = function () {
            vm.slides[vm.index].Hidden = false;
        };

        vm.hideAll = function () {
            for (var i = 0; i < vm.slides.length; i++) {
                vm.slides[i].Hidden = true;
            }
        };

        vm.imageClicked = function (index) {
            vm.index = index;
            vm.hideAll();
            vm.showPicture();
        };

        vm.plusSlides = function (n) {
            var i = vm.index + n;
            vm.slides[vm.index].Hidden = true;
            if (i > vm.slides.length - 1) {
                i = 0;
            }
            else if (i < 0) {
                i = vm.slides.length - 1;
            }
            vm.index = i;
            vm.showPicture();
        };

        vm.changeGallery = function () {
            vm.slides = vm.selectedGallery.Images;
            vm.hideAll();
            vm.index = 0;
        };

        return vm;
    }
})();