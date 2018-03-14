(function () {
  'use strict';

  angular
    .module('app')
    .directive('paypalButton',
      function () {
        return {
          templateUrl: '/views/donate/paypalbutton.html'
        };
      });

})();