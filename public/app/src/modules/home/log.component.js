'use strict';
(function () {
    angular.module('log.module')
        .component('logComponent', {
            templateUrl:"app/src/modules/home/components/log/home.html",
            controller:homeLogCtrl
        });
    function homeLogCtrl($scope, $http, $cookies, $state) {
        $scope.submitForm = function () {
            $http({
                method: 'POST',
                url: base_url + 'login',
                data: $scope.log
            }).then(function successCallback(response) {
                if(response.data.status_code === 200){
                    $cookies.put('auth_key', response.data.data.auth_key);
                    $cookies.put('admi_user',response.data.data.firstname + " " + response.data.data.lastname);
                    $state.go('app.admin');
                }else {
                    $scope.invalidLog = response.data.message;
                }

            });
        }
    }
})();