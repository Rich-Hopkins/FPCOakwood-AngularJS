(function () {
	'use strict';

	angular
		.module('app')
		.directive('eventOnHome',
		function () {
			return {
				templateUrl: '/views/home/homeEventTemplate.html'
			};
		});
	
})();