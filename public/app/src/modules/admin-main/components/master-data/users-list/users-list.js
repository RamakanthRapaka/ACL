'use strict';
(function () {
    angular.module('admin.component.module')
            .component('usersList', {
                templateUrl: 'app/src/modules/admin-main/components/master-data/users-list/users-list.html',
                controller: usersListCtrl
            });

    function usersListCtrl($scope, $http, $cookies, $state) {

        var data = {
            api_token: $cookies.get('auth_key')
        }
        $http({
            method: 'POST',
            url: base_url + 'userslist',
            data: data
        }).then(function (response) {
            if (response.data.status_code === 200) {

                $scope.usersList = response.data.users;

                var list = $scope.usersList;
                /*console.log($scope.usersList);*/
                var items = [];
                $.each(list, function (key, value) {
                    items[key] = [value.id, value.username, value.email,  value.first_name +' '+ value.last_name, value.mobile, value.mobile_verify, value.created_at];
                });
                /*console.log(items.slice(0, 36));*/

                var dataSet = items;
                /*console.log(dataSet);*/
                var columnDefs = [{
                    title: "Id"
                    },{
                    title: "UserName"
                    }, {
                        title: "Email"
                    }, {
                        title: "FullNmae"
                    }, {
                        title: "Mobile"
                    }, {
                        title: "Mobile Verify"
                    }, {
                        title: "Created Date"
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
