(function () {
    'use strict';

    angular
        .module('app')
        .service('dataService', ['$http', '$q', dataService]);

    function dataService($http, $q) {
        return {
            getAllEvents: function () {
                return $http.get('/api/events')
                    .then(function (response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            return $q.reject(response.data);
                        }
                    },
                        function (response) {
                            return $q.reject(response.data);
                        });
            },

            getMinistryAssignments: function () {
                return $http.get('/api/ministry')
                    .then(function (response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            return $q.reject(response.data);
                        }
                    },
                        function (response) {
                            return $q.reject(response.data);
                        });
            },

            getGallery: function () {
                return $http.get('/api/gallery')
                    .then(function (response) {
                        if (typeof response.data === 'object') {
                            return response.data;
                        } else {
                            return $q.reject(response.data);
                        }
                    },
                        function (response) {
                            return $q.reject(response.data);
                        });
            }
        };
    };

})();