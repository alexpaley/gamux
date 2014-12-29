'use strict';

var gamuxApp = angular.module('gamuxApp', ['ngRoute', 'gamuxApp.controllers', 'gamuxApp.services', 'angularFileUpload']);

gamuxApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/partials/home.html',
            controller: 'homeCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

        console.log("Running Angular");

    $locationProvider.html5Mode(true);
}]);

gamuxApp.run();

