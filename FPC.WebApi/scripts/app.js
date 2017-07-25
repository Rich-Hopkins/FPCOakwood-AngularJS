'use strict';
(function () {

	var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngTouch', 'ngSanitize', 'ui.bootstrap', 'ngResource']);

	app.config(['$routeProvider', '$locationProvider', '$resourceProvider', function ($routeProvider, $locationProvider, $resourceProvider) {
		$resourceProvider.defaults.stripTrailingSlashes = false;
		$routeProvider.caseInsensitiveMatch = true;
		$routeProvider
			.when('/',
			{
				controller: 'Home',
				controllerAs: 'home',
				templateUrl: 'views/home/home.html'
			})
			.when('/about',
			{
				controller: 'About',
				controllerAs: 'about',
				templateUrl: 'views/about/about.html'
			})
			.when('/offerings',
			{
				controller: 'Offerings',
				controllerAs: 'offerings',
				templateUrl: 'views/offerings/offerings.html'
			})
			.when('/events',
			{
				controller: 'Events',
				controllerAs: 'events',
				templateUrl: 'views/events/events.html'
			})
			.when('/fireworks1',
			{
				controller: 'Schedule',
				controllerAs: 'schedule',
				templateUrl: 'views/fireworksschedule/schedule.html'
			})
			.when('/drawer',
			{
				controller: 'Drawer',
				controllerAs: 'drawer',
				templateUrl: '/views/fireworksdrawercount/drawer.html'
			})
			.when('/calculator',
			{
				controller: 'Calculator',
				controllerAs: 'calculator',
				templateUrl: 'views/fireworkscalculator/calculator.html'
			})
			.when('/inventory',
			{
				controller: 'Inventory',
				controllerAs: 'inventory',
				templateUrl: 'views/fireworksinventory/inventory.html'
			})
			.otherwise({ redirectTo: '/' });

		$locationProvider.html5Mode(true);
	}
	]);

}());