(function () {
    'use strict';

    angular
        .module('app')
        .service('dataService', ['$http', '$q', dataService]);

    function dataService($http, $q) {
        return {
            getData: function (path) {
                return $http.get('/api/' + path)
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