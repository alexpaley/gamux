'use strict'

var mod = angular.module('gamuxApp.controllers', []);

mod.controller('homeCtrl', ['$scope', '$location', '$anchorScroll', 'UserService', function($scope, $location, $anchorScroll, User) {
    angular.extend($scope, {
        email: null,
        emailSent: false,
        cards: [],
        isSearching: false
    });
    
    $scope.isMobile = helpers.isMobileBrowser();

    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    };

    $scope.hasEmail = function() {
        return !!$scope.email;
    };

    $scope.showSearch = function() {
        $scope.isSearching = !$scope.isSearching;

        var el = document.getElementById('search-field');
        el.focus();

    }

    $scope.submitEmail = function() {
        if(!$scope.hasEmail()) { 
            return;
        }
        
        User.submitEmail($scope.email).then(function(success) {
            $scope.emailSent = true;
            $scope.deskText = "Registered";
            $scope.mobileText = "Registered";
        }, function(error) {
            console.log("Email failed to save");
        });
    };

}]);

