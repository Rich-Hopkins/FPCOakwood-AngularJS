(function () {
	'use strict';

	angular
		.module('app')
		.directive('eventsItem', function () {
			return {
				templateUrl: '/views/events/event.html'
			};
		});

})();