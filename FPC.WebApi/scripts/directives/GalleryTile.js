(function () {
    'use strict';

    angular
        .module('app')
        .directive('galleryTile',
            function () {
                return {
                    templateUrl: '/views/gallery/galleryTemplate.html'
                };
            });

})();