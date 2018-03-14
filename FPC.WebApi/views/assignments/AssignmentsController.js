(function () {
  'use strict';

  angular
    .module('app')
    .controller('Assignments', ['eventsService', Assignments]);

  function Assignments(eventsService) {
    var vm = this;
    eventsService.getMinistryAssignments()
      .then(function (data) {
        vm.assignmentsList = data;
      },
      function (error) {
        console.log(error);
      });

    return vm;
  }


})();