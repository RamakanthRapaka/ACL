'use strict';
(function () {
    function appCtrl($scope, $rootScope) {

    }

    angular.module('app.module')
        .component('appComponent', {
            template: '<ui-view/>',
            controller: appCtrl
        });
})();
