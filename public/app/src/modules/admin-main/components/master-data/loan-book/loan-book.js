'use strict';
(function () {
    angular.module('admin.component.module')
            .component('loanBook', {
                templateUrl: 'app/src/modules/admin-main/components/master-data/loan-book/loan-book.html',
                controller: loanBookCtrl
            });

    function loanBookCtrl($scope, $http, $cookies, $state) {

        var data = {
            api_token: $cookies.get('auth_key')
        }
        $http({
            method: 'POST',
            url: base_url + 'loanbook',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {
                console.log(response.data);
                console.log(response.data.chart_data);

                var ctx = document.getElementById("myChart");
                var myChart = new Chart(ctx, response.data.chart_data);

            } else {

            }

        });

    }

})();
