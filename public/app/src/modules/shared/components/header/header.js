'use strict';
(function(){
    angular.module('shared.component.module')
        .component('adminHeader', {
            templateUrl: 'app/src/modules/shared/components/header/header.html',
            controller: adminHeaderCtrl

        });
    function adminHeaderCtrl($scope) {
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
            if ($('#sidebar').hasClass('active')){
                $('#content').css('margin-left',"80px");
            }else {
                $('#content').css('margin-left',"250px");
            }


        });
    }
})();


// if ($('#content').hasClass('ml-80')) {
//     $('#content').removeClass('ml-80');
//     $('#content').toggleClass('ml-250');
// }else if($('#content').hasClass('ml-250')){
//     $('#content').removeClass('ml-250');
//     $('#content').toggleClass('ml-80');
// }
