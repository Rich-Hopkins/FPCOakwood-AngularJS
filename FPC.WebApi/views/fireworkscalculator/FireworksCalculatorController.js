(function () {

	angular
		.module('app')
		.controller('Calculator', Calculator);

	function Calculator($scope) {
		$scope.cash = 0;
		$scope.credit = 0;
		$scope.bank = 0;

		$scope.revenue = function () {
			var cash = parseFloat($scope.cash);
			var credit = parseFloat($scope.credit);
			var bank = parseFloat($scope.bank);
			return (cash + credit - bank).toFixed(2);
		};

		$scope.tax = function() {
			return ($scope.revenue() - $scope.revenue() / 1.05).toFixed(2);
		};

		$scope.netSales = function() {
			return ($scope.revenue() - $scope.tax()).toFixed(2);
		};

		$scope.netCost = function() {
			return ($scope.netSales() * .8).toFixed(2);
		};

		$scope.profit = function() {
			return ($scope.netSales() * .2).toFixed(2);
		};
	}

})();
