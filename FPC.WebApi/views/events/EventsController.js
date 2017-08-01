(function () {
	'use strict';

	angular
		.module('app')
		.controller('Events', ['eventsService', '$location', '$anchorScroll', '$timeout', Events]);

	function Events(eventsService, $location, $anchorScroll, $timeout, id) {
		var vm = this;
		vm.eventsList = eventsService.getAllEvents();

		$timeout(function() {
			$anchorScroll($location.hash(id));
		});
		
		return vm;
	}
	
})();