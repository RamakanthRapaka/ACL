'use strict';
(function () {
    angular.module('admin.module')
        .component('adminComponent', {
            template: `
            <div class="page-view wrapper"> 
            <admin-header></admin-header>
             <app-sidenav></app-sidenav>                  
             <div id="content">
                 <ui-view/> 
             </div>                           
            
            </div>
        `,
            controller: function () {

            }
        });
})();
