(function () {
    'use strict';

    angular
        .module('app')
        .controller('Gallery', ['dataService', Gallery]);

    function Gallery(dataService) {
        var vm = this;
        vm.visible = [];

        dataService.getData('imgur')
            .then(function (data) {
                vm.galleryList = data;
                vm.selectedGallery = vm.galleryList[0];
                vm.slides = vm.selectedGallery.Images;
                vm.index = 0;
                vm.hideAll();
            },
                function (error) {
                    console.log('Error: ' + error);
                });

        vm.showPicture = function(index) {
            vm.visible[index] = true;
        };

        vm.hideAll = function() {
            for (var i = 0; i < vm.slides.length; i++) {
                vm.visible[i] = false;
            }
        };

        vm.imageClicked = function (index) {
            vm.index = index;
            vm.hideAll();
            vm.showPicture(vm.index);
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
            vm.hideAll();
            vm.showPicture(vm.index);
        };

        vm.changeGallery = function () {
            vm.slides = vm.selectedGallery.Images;
            vm.visible = [vm.slides.length];
            vm.hideAll();
            vm.index = 0;
        };
        
        return vm;
    }
})();