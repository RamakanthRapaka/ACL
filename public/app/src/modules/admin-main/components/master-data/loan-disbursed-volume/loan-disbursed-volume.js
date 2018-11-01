'use strict';
(function () {
    angular.module('admin.component.module')
            .component('loanDisbursedVolume', {
                templateUrl: 'app/src/modules/admin-main/components/master-data/loan-disbursed-volume/loan-disbursed-volume.html',
                controller: loanDisbursedVolumeCtrl
            });

    function loanDisbursedVolumeCtrl($scope, $http, $cookies, $state) {

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
                    type: 'bar',
                    data: {
                        labels: ["1900", "1950", "1999", "2050"],
                        datasets: [{
                                label: "Europe",
                                type: "line",
                                borderColor: "#8e5ea2",
                                data: [408, 547, 675, 734],
                                fill: false
                            }, {
                                label: "Africa",
                                type: "line",
                                borderColor: "#3e95cd",
                                data: [133, 221, 783, 2478],
                                fill: false
                            }, {
                                label: "Europe",
                                type: "bar",
                                backgroundColor: "rgba(0,0,0,0.2)",
                                data: [408, 547, 675, 734],
                            }, {
                                label: "Africa",
                                type: "bar",
                                backgroundColor: "rgba(0,0,0,0.2)",
                                backgroundColorHover: "#3e95cd",
                                data: [133, 221, 783, 2478]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Population growth (millions): Europe & Africa'
                        },
                        legend: {display: false}
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
                    type: 'bar',
                    data: {
                        labels: ["1900", "1950", "1999", "2050"],
                        datasets: [{
                                label: "Europe",
                                type: "line",
                                borderColor: "#8e5ea2",
                                data: [408, 547, 675, 734],
                                fill: false
                            }, {
                                label: "Africa",
                                type: "line",
                                borderColor: "#3e95cd",
                                data: [133, 221, 783, 2478],
                                fill: false
                            }, {
                                label: "Europe",
                                type: "bar",
                                backgroundColor: "rgba(0,0,0,0.2)",
                                data: [408, 547, 675, 734],
                            }, {
                                label: "Africa",
                                type: "bar",
                                backgroundColor: "rgba(0,0,0,0.2)",
                                backgroundColorHover: "#3e95cd",
                                data: [133, 221, 783, 2478]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Population growth (millions): Europe & Africa'
                        },
                        legend: {display: false}
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
                    type: 'bar',
                    data: {
                        labels: ["1900", "1950", "1999", "2050"],
                        datasets: [{
                                label: "Europe",
                                type: "line",
                                borderColor: "#8e5ea2",
                                data: [408, 547, 675, 734],
                                fill: false
                            }, {
                                label: "Africa",
                                type: "line",
                                borderColor: "#3e95cd",
                                data: [133, 221, 783, 2478],
                                fill: false
                            }, {
                                label: "Europe",
                                type: "bar",
                                backgroundColor: "rgba(0,0,0,0.2)",
                                data: [408, 547, 675, 734],
                            }, {
                                label: "Africa",
                                type: "bar",
                                backgroundColor: "rgba(0,0,0,0.2)",
                                backgroundColorHover: "#3e95cd",
                                data: [133, 221, 783, 2478]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Population growth (millions): Europe & Africa'
                        },
                        legend: {display: false}
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
                    type: 'bar',
                    data: {
                        labels: ["1900", "1950", "1999", "2050"],
                        datasets: [{
                                label: "Europe",
                                type: "line",
                                borderColor: "#8e5ea2",
                                data: [408, 547, 675, 734],
                                fill: false
                            }, {
                                label: "Africa",
                                type: "line",
                                borderColor: "#3e95cd",
                                data: [133, 221, 783, 2478],
                                fill: false
                            }, {
                                label: "Europe",
                                type: "bar",
                                backgroundColor: "rgba(0,0,0,0.2)",
                                data: [408, 547, 675, 734],
                            }, {
                                label: "Africa",
                                type: "bar",
                                backgroundColor: "rgba(0,0,0,0.2)",
                                backgroundColorHover: "#3e95cd",
                                data: [133, 221, 783, 2478]
                            }
                        ]
                    },
                    options: {
                        title: {
                            display: true,
                            text: 'Population growth (millions): Europe & Africa'
                        },
                        legend: {display: false}
                    }
                });


            } else {

            }

        });
    }

})();
