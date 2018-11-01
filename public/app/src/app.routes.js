(function () {
    var routeModule = angular.module('route.module', ['ui.router']);

    routeModule.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('app', {
                abstract: true,
                component: 'appComponent',
                url: '/'
            })
            .state('app.home', {
                url: '',
                component: 'logComponent',
                // resolve: {
                //     data: function ($injector, $q, $state, $cookies) {
                //         var api_token = $cookies.get('auth_key');
                //
                //         if ( api_token === '' || api_token === undefined){
                //             $state.go('app.home');
                //         }
                //         else if (api_token != null || api_token != '') {
                //             $state.go('app.admin');
                //         }
                //
                //     }
                // }
            })
            .state('app.admin', {
                url: 'home',
                component: 'adminComponent',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/shared/components/header/header.js',
                                'app/src/modules/shared/components/side-nav/side-nav.js'
                            ]
                        });
                    }]
                }

            })
            .state('app.admin.registration', {
                url: '/register',
                component: 'adminRegistration',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/admin-view/register/register.js'
                            ]
                        });
                    }]
                }

            })


            .state('app.admin.usersList', {
                url: '/users',
                component: 'usersList',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/users-list/users-list.js'
                            ]
                        });
                    }]
                }

            })
            
            
            .state('app.admin.investorsList', {
                url: '/investors',
                component: 'investorsList',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/investors-list/investors-list.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanChart', {
                url: '/loans',
                component: 'loanChart',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-split-value/loan-chart.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanBook', {
                url: '/loanbook',
                component: 'loanBook',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-book/loan-book.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanVolume', {
                url: '/loanvolume',
                component: 'loanVolume',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-split-volume/loan-volume.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanDisbursed', {
                url: '/loandisbursed',
                component: 'loanDisbursed',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-disbursed/loan-disbursed.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanDisbursedVolume', {
                url: '/loandisbursedvolume',
                component: 'loanDisbursedVolume',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-disbursed-volume/loan-disbursed-volume.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanOutstandingValue', {
                url: '/loanoutstandingvalue',
                component: 'loanOutstandingValue',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-outstanding-value/loan-outstanding-value.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanOutstandingVolume', {
                url: '/loanoutstandingvolume',
                component: 'loanOutstandingVolume',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-outstanding-volume/loan-outstanding-volume.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanSettledValue', {
                url: '/loanSettledValue',
                component: 'loanSettledValue',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-settled-value/loan-settled-value.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanSettledVolume', {
                url: '/loanSettledVolume',
                component: 'loanSettledVolume',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-settled-volume/loan-settled-volume.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanTenureAvg', {
                url: '/loanTenureAvg',
                component: 'loanTenureAvg',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-tenure-avg/loan-tenure-avg.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanAvgYield', {
                url: '/loanAvgYield',
                component: 'loanAvgYield',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-avg-yield/loan-avg-yield.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanAvgValue', {
                url: '/loanAvgValue',
                component: 'loanAvgValue',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-avg-value/loan-avg-value.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanDpdQuarterly', {
                url: '/loanDpdQuarterly',
                component: 'loanDpdQuarterly',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-dpd-quarterly/loan-dpd-quarterly.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanDpdValue', {
                url: '/loanDpdValue',
                component: 'loanDpdValue',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-dpd-value/loan-dpd-value.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanDpdType', {
                url: '/loanDpdType',
                component: 'loanDpdType',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-dpd-type/loan-dpd-type.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanDpdPartners', {
                url: '/loanDpdPartners',
                component: 'loanDpdPartners',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-dpd-partners/loan-dpd-partners.js'
                            ]
                        });
                    }]
                }

            })
            
            .state('app.admin.loanDpdScore', {
                url: '/loanDpdScore',
                component: 'loanDpdScore',
                resolve: {
                    loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            files: ['app/src/modules/admin-main/components/master-data/loan-dpd-score/loan-dpd-score.js'
                            ]
                        });
                    }]
                }

            })



        $urlRouterProvider.otherwise('/');
    });
    routeModule.run(['$state', '$rootScope', '$injector', ($state, $rootScope, $injector) => {
        $rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
            if (toState.data && toState.data.redirect) {
                var redirectTo = $injector.invoke(toState.data.redirect, this, {
                    toStateParams: toParams,
                    toState: toState
                });
                console.log(redirectTo);

                if (redirectTo) {
                    event.preventDefault();
                    $state.transitionTo(redirectTo);
                }
            }
        });
    }]);
})();
