(function () {
	'use strict';

	angular
		.module('app')
		.controller('Events', ['dataService', '$location', '$anchorScroll', '$timeout', Events]);

	function Events(dataService, $location, $anchorScroll, $timeout, id) {
		var vm = this;
		dataService.getData('events')
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