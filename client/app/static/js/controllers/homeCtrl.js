'use strict'

var mod = angular.module('gamuxApp.controllers', []);

mod.controller('homeCtrl', ['$scope', '$location', '$anchorScroll', '$timeout', 'UserService', '$upload', function($scope, $location, $anchorScroll, $timeout, User, $upload) {
    angular.extend($scope, {
        email: null,
        emailSent: false,
        cards: [],
        isSearching: false,
        myFile: {},
        myFiles: []
    });

    //Helper Functions
    $scope.isMobile = helpers.isMobileBrowser();
    $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    };

    $scope.showSearch = function() {
        $scope.isSearching = !$scope.isSearching;

        $timeout(function() {
            var el = document.getElementById('search-field');
            el.focus();
        }, 100)

    };

    $scope.$watch('myFiles', function() {
        for(var i = 0; i < $scope.myFiles.length; i++) {
            var file     = $scope.myFiles[i];
            $scope.upload = $upload.upload({
                url: 'server/upload/url',
                data: { myFile: $scope.myFile },
                file: file
            }).progress(function(evt) {
                console.log('progress: ' + parseInt(100.0 * evt.loaded / evt.total) + '% file :'+ evt.config.file.name);
            }).success(function(data, status, headers, config) {
                // file is uploaded successfully
                console.log('file ' + config.file.name + 'is uploaded successfully. Response: ' + data);
            });
        }
    });


}]);

