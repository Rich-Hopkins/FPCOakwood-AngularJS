(function () {

	angular
		.module('app')
		.controller('FireworksMenu', FireworksMenu);

	function FireworksMenu($scope, $location) {
		$scope.navigate = function (path) {
			if (!$scope.isNavCollapsed) {
				$scope.isNavCollapsed = true;
			}
			$location.url('/' + path);
		}
	}
})();
