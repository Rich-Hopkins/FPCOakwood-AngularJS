(function () {
	'use strict';

	angular
		.module('app')
		.directive('homeEvent',
		function () {
			return {
				templateUrl: '/views/home/homeEvent.html'
			};
		});
	
})();