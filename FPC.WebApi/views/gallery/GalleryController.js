﻿(function () {
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
                vm.index = -1;
            },
                function (error) {
                    console.log('Error: ' + error);
                });
        
        vm.imageClicked = function (index) {
            vm.index = index;
            vm.slides[index].Hidden = false;
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
            vm.slides[i].Hidden = false;
        };

        vm.hideAll = function() {
            vm.slides.forEach((slide) => {
                slide.Hidden = true;
            });
        };



        vm.changeGallery = function () {
            vm.slides = vm.selectedGallery.Images;
            vm.index = -1;
            vm.hideAll();
        };
        return vm;
    }
})();