<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>CredRight</title>
    <!-- Bootstrap core CSS -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!--<link rel="stylesheet" href="node_modules/@fortawesome/fontawesome-free/css/all.css">-->
    <link rel="stylesheet" href="{!! asset('app/src/common/fonts/line-awesome/css/line-awesome-font-awesome.min.css') !!}">
    <link rel="stylesheet" href="{!! asset('app/node_modules/angular-material/angular-material.css') !!}">
    <link rel="stylesheet" href="{!! asset('app/node_modules/datatables.net-dt/css/jquery.dataTables.min.css') !!}">
    <link rel="stylesheet" href="{!! asset('app/node_modules/bootstrap/dist/css/bootstrap.css') !!}">
    <link rel="stylesheet" href="{!! asset('app/dist/css/style.min.css') !!}">
    <style>
        table.dataTable tbody>tr.selected,
        table.dataTable tbody>tr>.selected {
            background-color: #A2D3F6;
        }
    </style>


</head>
<body>
<div class="">
    <div ui-view></div>
</div>


<!-- Bootstrap core JavaScript -->
<script src="{!! asset('app/dist/scripts/vendorScript.min.js') !!}"></script>

<!-- Home Module -->
<script src="{!! asset('app/src/modules/home/log.module.js') !!}"></script>
<script src="{!! asset('app/src/modules/home/components/log.component.module.js') !!}"></script>

<!-- Home : Components -->
<script src="{!! asset('app/src/modules/home/log.component.js') !!}"></script>

<!--Admin : Panel-->
<script src="{!! asset('app/src/modules/admin-main/admin.module.js') !!}"></script>
<script src="{!! asset('app/src/modules/admin-main/admin.component.js') !!}"></script>
<script src="{!! asset('app/src/modules/admin-main/components/admin.component.module.js') !!}"></script>

<!--Admin : Directive-->
<script src="{!! asset('app/src/modules/admin-main/directives/admin.directive.module.js') !!}"></script>
<!--Shared Module-->
<script src="{!! asset('app/src/modules/shared/shared.module.js') !!}"></script>

<!--Shared : Components-->
<script src="{!! asset('app/src/modules/shared/components/shared.component.module.js') !!}"></script>
<script src="{!! asset('app/src/modules/shared/components/side-nav/side-nav.js') !!}"></script>
<script src="{!! asset('app/src/modules/shared/components/header/header.js') !!}"></script>

<!--Shared : Directives-->
<script src="{!! asset('app/src/modules/shared/directives/shared.directive.module.js') !!}"></script>
<!--<script src="src/modules/shared/directives/s"></script>-->

<!--Shared : Services-->
<script src="{!! asset('app/src/modules/shared/services/shared.service.module.js') !!}"></script>


<script src="{!! asset('app/src/app.routes.js') !!}"></script>
<script src="{!! asset('app/src/app.module.js') !!}"></script>
<script src="{!! asset('app/src/app.component.js') !!}"></script>
<script src="{!! asset('app/app.js') !!}"></script>
</body>

</html>
