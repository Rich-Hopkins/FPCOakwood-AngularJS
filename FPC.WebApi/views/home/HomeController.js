(function () {
	'use strict';

	angular
		.module('app')
		.controller('Home', ['eventsService', Home]);

	function Home(eventsService) {
		var vm = this;

		vm.eventsList = eventsService.getAllEvents();

		return vm;
	}
}());