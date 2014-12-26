'use strict'

var mod = angular.module('gamuxApp.controllers', []);

mod.controller('homeCtrl', ['$scope', '$location', '$anchorScroll', 'UserService', function($scope, $location, $anchorScroll, User) {
    angular.extend($scope, {
        email: null,
        emailSent: false,
        deskText: "Register",
        mobileText: "Get Early Access"
    });
    
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    };

    $scope.hasEmail = function() {
        return !!$scope.email;  
    };

    $scope.isMobile = helpers.isMobileBrowser();

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

