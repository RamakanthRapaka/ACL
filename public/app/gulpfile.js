// loads various gulp modules
var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var watch = require('gulp-watch');
var uglify = require('gulp-uglify');

var cssArray = [
    "src/common/css/log.css",
    "src/common/css/style.css",
    "src/modules/shared/components/side-nav/side-nav.css",
];


var vendorJsArray = [
    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.min.js",
    "node_modules/angular/angular.js",
    "node_modules/@uirouter/angularjs/release/angular-ui-router.js",
    "node_modules/@uirouter/angularjs/release/stateEvents.js",
    "node_modules/angular-translate/dist/angular-translate.js",
    "node_modules/ngstorage/ngStorage.js",
    "node_modules/angular-aria/angular-aria.js",
    "node_modules/angular-animate/angular-animate.js",
    "node_modules/angular-messages/angular-messages.js",
    "node_modules/angular-material/angular-material.js",
    "node_modules/angular-cookies/angular-cookies.js",
    "node_modules/oclazyload/dist/ocLazyLoad.min.js",
    "node_modules/datatables.net/js/jquery.dataTables.min.js",
    "node_modules/datatables.net-dt/js/dataTables.dataTables.min.js",    
    "node_modules/chart.js/dist/Chart.js"

];
// create task
gulp.task('styles', function() {
    gulp.src(cssArray)
        .pipe(minifyCSS())
        .pipe(concat('style.min.css',{rebaseUrls:false}))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('vendor-js', function(){
    gulp.src(vendorJsArray)
        .pipe(concat('vendorScript.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('fonts', function() {
    return gulp.src('src/common/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});

gulp.task('default', ['styles','vendor-js'], function() {
    // watch for CSS changes
    gulp.watch(cssArray, function() {
        // run styles upon changes
        gulp.run('styles');
    });
    gulp.watch(gulp.run('styles'));
});