(function () {
	'use strict';

	angular
		.module('app')
		.controller('MainMenuController', MainMenuController);

	function MainMenuController($scope, $location) {

		$scope.isNavCollapsed = true;
		$scope.isCollapsed = false;
		$scope.isCollapsedHorizontal = false;

		$scope.navigate = function (path) {
			if (!$scope.isNavCollapsed) {
				$scope.isNavCollapsed = true;
			}
			if (path !== 'rich') {
				$location.url('/' + path);
			}
		}
	}
})();
