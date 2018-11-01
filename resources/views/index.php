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
    <link rel="stylesheet" href="src/common/fonts/line-awesome/css/line-awesome-font-awesome.min.css">
    <link rel="stylesheet" href="node_modules/angular-material/angular-material.css">
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.css">

    <link rel="stylesheet" href="dist/css/style.min.css">


</head>
<body>
<div class="">
    <div ui-view></div>
</div>


<!-- Bootstrap core JavaScript -->
<script src="dist/scripts/vendorScript.min.js"></script>

<!-- Home Module -->
<script src="src/modules/home/log.module.js"></script>
<script src="src/modules/home/components/log.component.module.js"></script>

<!-- Home : Components -->
<script src="src/modules/home/log.component.js"></script>

<!--Admin : Panel-->
<script src="src/modules/admin-main/admin.module.js"></script>
<script src="src/modules/admin-main/admin.component.js"></script>
<script src="src/modules/admin-main/components/admin.component.module.js"></script>

<!--Admin : Directive-->
<script src="src/modules/admin-main/directives/admin.directive.module.js"></script>
<!--Shared Module-->
<script src="src/modules/shared/shared.module.js"></script>

<!--Shared : Components-->
<script src="src/modules/shared/components/shared.component.module.js"></script>
<script src="src/modules/shared/components/side-nav/side-nav.js"></script>
<script src="src/modules/shared/components/header/header.js"></script>

<!--Shared : Directives-->
<script src="src/modules/shared/directives/shared.directive.module.js"></script>
<!--<script src="src/modules/shared/directives/s"></script>-->

<!--Shared : Services-->
<script src="src/modules/shared/services/shared.service.module.js"></script>


<script src="src/app.routes.js"></script>
<script src="src/app.module.js"></script>
<script src="src/app.component.js"></script>
<script src="app.js"></script>
</body>

</html>
