'use strict';
(function () {
    angular.module('admin.component.module')
            .component('loanDpdValue', {
                templateUrl: 'app/src/modules/admin-main/components/master-data/loan-dpd-value/loan-dpd-value.html',
                controller: loanDpdValueCtrl
            });

    function loanDpdValueCtrl($scope, $http, $cookies, $state) {

        var data = {
            api_token: $cookies.get('auth_key')
        }
        $http({
            method: 'POST',
            url: base_url + 'loantype',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {
                console.log(response.data);

                var ctx = document.getElementById("myChart");
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                        datasets: [{
                                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                                label: "Africa",
                                borderColor: "#3e95cd",
                                fill: false
                            }, {
                                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                                label: "Asia",
                                borderColor: "#8e5ea2",
                                fill: false
                            }, {
                                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                                label: "Europe",
                                borderColor: "#3cba9f",
                                fill: false
                            }, {
                                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                                label: "Latin America",
                                borderColor: "#e8c3b9",
                                fill: false
                            }, {
                                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                                label: "North America",
                                borderColor: "#c45850",
                                fill: false
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'World population per region (in millions)'
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
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                        datasets: [{
                                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                                label: "Africa",
                                borderColor: "#3e95cd",
                                fill: false
                            }, {
                                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                                label: "Asia",
                                borderColor: "#8e5ea2",
                                fill: false
                            }, {
                                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                                label: "Europe",
                                borderColor: "#3cba9f",
                                fill: false
                            }, {
                                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                                label: "Latin America",
                                borderColor: "#e8c3b9",
                                fill: false
                            }, {
                                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                                label: "North America",
                                borderColor: "#c45850",
                                fill: false
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'World population per region (in millions)'
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
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                        datasets: [{
                                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                                label: "Africa",
                                borderColor: "#3e95cd",
                                fill: false
                            }, {
                                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                                label: "Asia",
                                borderColor: "#8e5ea2",
                                fill: false
                            }, {
                                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                                label: "Europe",
                                borderColor: "#3cba9f",
                                fill: false
                            }, {
                                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                                label: "Latin America",
                                borderColor: "#e8c3b9",
                                fill: false
                            }, {
                                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                                label: "North America",
                                borderColor: "#c45850",
                                fill: false
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'World population per region (in millions)'
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
                var myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                        datasets: [{
                                data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                                label: "Africa",
                                borderColor: "#3e95cd",
                                fill: false
                            }, {
                                data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                                label: "Asia",
                                borderColor: "#8e5ea2",
                                fill: false
                            }, {
                                data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                                label: "Europe",
                                borderColor: "#3cba9f",
                                fill: false
                            }, {
                                data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                                label: "Latin America",
                                borderColor: "#e8c3b9",
                                fill: false
                            }, {
                                data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
                                label: "North America",
                                borderColor: "#c45850",
                                fill: false
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'World population per region (in millions)'
                        }
                    }
                });

            } else {

            }

        });

    }

})();
