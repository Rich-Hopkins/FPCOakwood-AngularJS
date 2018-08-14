(function () {
	'use strict';

	angular
		.module('app')
		.controller('Home', ['dataService', Home]);

	function Home(dataService) {
		var vm = this;

		dataService.getData('events')
			.then(function (data) {
				vm.eventsList = data;
			},
			function (error) {
				console.log(error);
			});
		return vm;
	}
}());