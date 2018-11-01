'use strict';
(function () {
    angular.module('admin.component.module')
            .component('investorsList', {
                templateUrl: 'app/src/modules/admin-main/components/master-data/investors-list/investors-list.html',
                controller: investorsListCtrl
            });

    function investorsListCtrl($scope, $http, $cookies, $state) {

        var data = {
            api_token: $cookies.get('auth_key')
        }
        $http({
            method: 'POST',
            url: base_url + 'investorlist',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {

                $scope.investorsList = response.data.investors;

                var list = $scope.investorsList;
                console.log($scope.investorsList);
                var items = [];
                $.each(list, function (key, value) {
                    items[key] = [value.id, value.name, value.short_name, value.partner_image];
                });
                console.log(items.slice(0, 36));

                var dataSet = items;
                console.log(dataSet);
                var columnDefs = [{
                    title: "Id"
                    },{
                    title: "Name"
                    }, {
                    title: "Short Name"
                    }, {
                    title: "Image"
                    }];

                var myTable;

                myTable = $('#example').DataTable({
                    "sPaginationType": "full_numbers",
                    data: dataSet,
                    columns: columnDefs,
                    dom: 'Bfrtip', // Needs button container
                    select: 'single',
                    responsive: true,
                    altEditor: true, // Enable altEditor
                    buttons: [{
                            text: 'Add',
                            name: 'add'        // do not change name
                        },
                        {
                            extend: 'selected', // Bind to Selected row
                            text: 'Edit',
                            name: 'edit'        // do not change name
                        },
                        {
                            extend: 'selected', // Bind to Selected row
                            text: 'Delete',
                            name: 'delete'      // do not change name
                        }]
                });


            } else {

            }

        });

    }

})();
