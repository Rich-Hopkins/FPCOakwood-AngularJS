(function () {
	'use strict';

	angular
		.module('app')
		.service('eventsService', ['$resource', eventsService]);

	function eventsService($resource) {
		var resource = $resource('/api/events',
			{},
			{
				'getAll': {
					method: 'GET',
					isArray: true
				}
			});

		return{
			getAllEvents: function() {
				return resource.query();
			}
		};
	};

})();