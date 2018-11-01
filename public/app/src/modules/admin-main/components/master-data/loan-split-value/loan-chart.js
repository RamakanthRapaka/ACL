'use strict';
(function () {
    angular.module('admin.component.module')
            .component('loanChart', {
                templateUrl: 'app/src/modules/admin-main/components/master-data/loan-split-value/loan-chart.html',
                controller: loanChartCtrl
            });

    function loanChartCtrl($scope, $http, $cookies, $state) {

        var data = {
            api_token: $cookies.get('auth_key')
        }
        $http({
            method: 'POST',
            url: base_url + 'loantype',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {
                console.log(response.data.chart_data);

                var ctx = document.getElementById("myChart");
                var myChart = new Chart(ctx, response.data.chart_data);
            } else {

            }

        });

        $http({
            method: 'POST',
            url: base_url + 'loantype',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {
                console.log(response.data.chart_data);

                var ctx = document.getElementById("myChart2");
                var myChart2 = new Chart(ctx, response.data.chart_data);

            } else {

            }

        });


        $http({
            method: 'POST',
            url: base_url + 'loantype',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {
                console.log(response.data.chart_data);

                var ctx = document.getElementById("myChart3");
                var myChart3 = new Chart(ctx, response.data.chart_data);

            } else {

            }

        });


        $http({
            method: 'POST',
            url: base_url + 'loantype',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {
                console.log(response.data.chart_data);

                var ctx = document.getElementById("myChart4");
                var myChart4 = new Chart(ctx, response.data.chart_data);

            } else {

            }

        });

    }

})();
