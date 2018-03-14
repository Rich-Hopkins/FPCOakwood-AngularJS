(function () {
  'use strict';

  angular
    .module('app')
    .directive('ministryAssignment',
      function () {
        return {
          templateUrl: '/views/assignments/assignmentTemplate.html'
        };
      });

})();