(function () {
	'use strict';

	angular
		.module('app')
		.controller('Events',['eventsService', Events])
		.controller('Vbs', Vbs)
		.controller('Fireworks', Fireworks);

	function Events(eventsService) {
		var vm = this;

		vm.eventsList = eventsService.getAllEvents();

		return vm;
	}

	function Vbs() {
		var vm = this;
		return vm;
	}

	function Fireworks() {
		var vm = this;
		return vm;
	}

})();