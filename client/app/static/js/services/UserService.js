'use strict'

var modservice = angular.module('gamuxApp.services', []);

modservice.service('UserService', ['$q', '$http', function($q, $http) {
    this.submitEmail = function(email) {
        var d = $q.defer();

        var req = {
            email: email
        };

        $http.post('/api/user/email', req).success(function(data, status) {
            d.resolve(data);
        }).error(function(data, status) {
            d.reject(status);
        });

        return d.promise;
    };
}]);
