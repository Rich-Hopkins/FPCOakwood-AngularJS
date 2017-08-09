(function () {
	'use strict';

	angular
		.module('app')
		.controller('Events', ['eventsService', '$location', '$anchorScroll', '$timeout', Events]);

	function Events(eventsService, $location, $anchorScroll, $timeout, id) {
		var vm = this;
		eventsService.getAllEvents()
			.then(function (data) {
					vm.eventsList = data;
				},
				function (error) {
					console.log(error);
				});

		$timeout(function() {
			$anchorScroll($location.hash(id));
		});
		
		return vm;
	}
	
})();