'use strict';
(function(){
    angular.module('shared.component.module')
        .component('appSidenav', {
            templateUrl: 'app/src/modules/shared/components/side-nav/side-nav.html',
            controller: sideNavCtrl

        });
    function sideNavCtrl($scope, $anchorScroll) {
        $anchorScroll.yOffset = 50;
        $scope.gotoAnchor = function(x) {
            $anchorScroll(x);

        };
    }
})();