'use strict';

var gamuxApp = angular.module('gamuxApp', ['ngRoute', 'gamuxApp.controllers', 'gamuxApp.services']);

gamuxApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/static/partials/prelogin.html',
            controller: 'preloginCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });

        console.log("Running Angular");

    $locationProvider.html5Mode(true);
}]);

gamuxApp.run();
