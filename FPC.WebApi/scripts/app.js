﻿'use strict';
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
            .when('/gallery',
                {
                    controller: 'Gallery',
                    controllerAs: 'gallery',
                    templateUrl: 'views/gallery/gallery.html'
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
            .when('/social',
                {
                    controller: 'Social',
                    controllerAs: 'social',
                    templateUrl: 'views/social/social.html'
                })
            .when('/donate',
                {
                    controller: 'Donate',
                    controllerAs: 'donate',
                    templateUrl: 'views/donate/donate.html'
                })
            .when('/donatesuccess',
                {
                    controller: 'Donate',
                    controllerAs: 'donate',
                    templateUrl: 'views/donate/donatesuccess.html'
                })
            .when('/donatefail',
                {
                    controller: 'Donate',
                    controllerAs: 'donate',
                    templateUrl: 'views/donate/donatefail.html'
                })
            .when('/giving',
                {
                    controller: 'Giving',
                    controllerAs: 'giving',
                    templateUrl: 'views/giving/giving.html'
                })
            .when('/assignments',
                {
                    controller: 'Assignments',
                    controllerAs: 'assignments',
                    templateUrl: 'views/assignments/assignments.html'
                })
            .when('/fireworks',
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