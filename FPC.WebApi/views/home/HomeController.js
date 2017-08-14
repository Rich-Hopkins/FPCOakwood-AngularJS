(function () {
	'use strict';

	angular
		.module('app')
		.controller('Home', ['eventsService', Home]);

	function Home(eventsService) {
		var vm = this;

		eventsService.getAllEvents()
			.then(function (data) {
				vm.eventsList = data;
			},
			function (error) {
				console.log(error);
			});
		return vm;
	}
}());