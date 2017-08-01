(function () {
	'use strict';

	angular
		.module('app')
		.directive('eventOnEvents',
		function () {
			return {
				templateUrl: '/views/events/eventsEventTemplate.html'
			};
		});

})();