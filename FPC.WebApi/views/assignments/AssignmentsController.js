(function () {
  'use strict';

  angular
    .module('app')
    .controller('Assignments', ['dataService', Assignments]);

  function Assignments(dataService) {
    var vm = this;
    dataService.getData('ministry')
      .then(function (data) {
        vm.assignmentsList = data;
      },
      function (error) {
        console.log(error);
      });

    return vm;
  }


})();