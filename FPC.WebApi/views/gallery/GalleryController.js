(function () {
    'use strict';

    angular
        .module('app')
        .controller('Gallery', ['dataService', Gallery]);

    function Gallery(dataService) {
        var vm = this;
        vm.show = [];

        dataService.getData('gallery')
            .then(function (data) {
                vm.galleryList = data;
                vm.selectedGallery = vm.galleryList[0];
                vm.slides = vm.selectedGallery.Photos;
                vm.index = 0;
                show(-1);
            },
                function (error) {
                    console.log('Error: ' + error);
                });

        function show(index) {
            for (var i = 0; i < vm.slides.length; i++) {
                if (i === index) {
                    vm.show[i] = '';
                }
                else {
                    vm.show[i] = 'hidden';
                }
                console.log('i: ' + i + '   ' + vm.show[i]);
            }
        }

        vm.imageClicked = function (index) {
            vm.index = index;
            show(vm.index);
        };

        vm.plusSlides = function (n) {
            var i = vm.index + n;
            if (i > vm.slides.length - 1) {
                i = 0;
            }
            else if (i < 0) {
                i = vm.slides.length - 1;
            }
            vm.index = i;
            show(vm.index);
        };

        vm.changeGallery = function () {
            vm.slides = vm.selectedGallery.Photos;
            vm.show = [vm.slides.length];
            show(-1);
            vm.index = 0;
        };

        return vm;
    }



})();