(function () {
  'use strict';

  angular
    .module('app')
    .service('eventsService', ['$http', '$q', eventsService]);

  function eventsService($http, $q) {
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
      }
    };
  };

})();