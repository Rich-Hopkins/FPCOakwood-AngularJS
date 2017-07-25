(function () {
	'use strict';

	angular
		.module('app')
		.controller('Drawer', Drawer);

	function Drawer($scope) {
		$scope.hundreds1 = 0;
		$scope.fifties1 = 0;
		$scope.twenties1 = 0;
		$scope.tens1 = 0;
		$scope.fives1 = 0;
		$scope.ones1 = 0;
		$scope.dollars1 = 0;
		$scope.halves1 = 0;
		$scope.quarters1 = 0;
		$scope.dimes1 = 0;
		$scope.nickels1 = 0;
		$scope.pennies1 = 0;
		$scope.hundreds2 = 0;
		$scope.fifties2 = 0;
		$scope.twenties2 = 0;
		$scope.tens2 = 0;
		$scope.fives2 = 0;
		$scope.ones2 = 0;
		$scope.dollars2 = 0;
		$scope.halves2 = 0;
		$scope.quarters2 = 0;
		$scope.dimes2 = 0;
		$scope.nickels2 = 0;
		$scope.pennies2 = 0;

		$scope.total1 = function() {
			return (
				parseFloat($scope.hundreds1)
				+ parseFloat($scope.fifties1)
				+ parseFloat($scope.twenties1)
				+ parseFloat($scope.tens1)
				+ parseFloat($scope.fives1)
				+ parseFloat($scope.ones1)
				+ parseFloat($scope.dollars1)
				+ parseFloat($scope.halves1)
				+ parseFloat($scope.quarters1)
				+ parseFloat($scope.dimes1)
				+ parseFloat($scope.nickels1)
				+ parseFloat($scope.pennies1))
				.toFixed(2);
		};


		$scope.total2 = function () {
			return (
				parseFloat($scope.hundreds2)
				+ parseFloat($scope.fifties2)
				+ parseFloat($scope.twenties2)
				+ parseFloat($scope.tens2)
				+ parseFloat($scope.fives2)
				+ parseFloat($scope.ones2)
				+ parseFloat($scope.dollars2)
				+ parseFloat($scope.halves2)
				+ parseFloat($scope.quarters2)
				+ parseFloat($scope.dimes2)
				+ parseFloat($scope.nickels2)
				+ parseFloat($scope.pennies2))
				.toFixed(2);
		};
	};


})();