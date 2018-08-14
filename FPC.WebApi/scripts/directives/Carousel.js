(function () {
    'use strict';

    angular
        .module('app')
        .directive('rhCarousel',
            function () {
                return {
                    templateUrl: '/views/gallery/galleryTemplate.html'
                };
            });
})();