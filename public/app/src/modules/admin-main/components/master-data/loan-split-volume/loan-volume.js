'use strict';
(function () {
    angular.module('admin.component.module')
            .component('loanVolume', {
                templateUrl: 'app/src/modules/admin-main/components/master-data/loan-split-volume/loan-volume.html',
                controller: loanVolumeCtrl
            });

    function loanVolumeCtrl($scope, $http, $cookies, $state) {

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
                var myChart = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: response.data.all_loans_types,
                        datasets: [{
                                label: '# of Loans',
                                data: response.data.all_loans,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)'
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                    display: false,
                                    ticks: {
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }],
                            yAxes: [{
                                    display: false,
                                    ticks: {
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }]
                        }
                    }
                });


            } else {

            }

        });

        $http({
            method: 'POST',
            url: base_url + 'loantype',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {
                console.log(response.data);

                var ctx = document.getElementById("myChart2");
                var myChart2 = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: response.data.all_loans_types,
                        datasets: [{
                                label: '# of Loans',
                                data: response.data.all_loans,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                    display: false,
                                    ticks: {
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }]
                        }
                    }
                });


            } else {

            }

        });


        $http({
            method: 'POST',
            url: base_url + 'loantype',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {
                console.log(response.data);

                var ctx = document.getElementById("myChart3");
                var myChart3 = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: response.data.all_loans_types,
                        datasets: [{
                                label: '# of Loans',
                                data: response.data.all_loans,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                    display: false,
                                    ticks: {
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }]
                        }
                    }
                });


            } else {

            }

        });


        $http({
            method: 'POST',
            url: base_url + 'loantype',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {
                console.log(response.data);

                var ctx = document.getElementById("myChart4");
                var myChart4 = new Chart(ctx, {
                    type: 'pie',
                    data: {
                        labels: response.data.all_loans_types,
                        datasets: [{
                                label: '# of Loans',
                                data: response.data.all_loans,
                                backgroundColor: [
                                    'rgba(255, 99, 132, 0.2)',
                                    'rgba(54, 162, 235, 0.2)',
                                    'rgba(255, 206, 86, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(255, 159, 64, 0.2)'
                                ],
                                borderColor: [
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(255, 159, 64, 1)'
                                ],
                                borderWidth: 1
                            }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                    display: false,
                                    ticks: {
                                        beginAtZero: true
                                    },
                                    gridLines: {
                                        display: false
                                    }
                                }]
                        }
                    }
                });


            } else {

            }

        });

    }

})();
