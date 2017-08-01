(function () {
	'use strict';

	angular
		.module('app')
		.controller('Events', ['eventsService', Events]);

	function Events(eventsService) {
		var vm = this;
		vm.eventsList = eventsService.getAllEvents();
		return vm;
	}
	
})();