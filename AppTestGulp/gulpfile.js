var gulp = require('gulp'),
    concat = require("gulp-concat"),
    cssmin = require("gulp-cssmin"),
    uglify = require("gulp-uglify");

gulp.task("min-css", function () {

    // Deploy bootstrap
    gulp.src("bower_components/bootstrap/dist/fonts/*")
        .pipe(gulp.dest("fonts"));

    gulp.src("bower_components/bootstrap/dist/js/*.min.js")
        .pipe(gulp.dest("Scripts"));

    // Compress site.css and bootstrap.css
    gulp.src(["bower_components/bootstrap/dist/css/bootstrap.min.css",
        "Content/site.css"])
        .pipe(concat("Content/site.min.css"))
        .pipe(cssmin())
        .pipe(gulp.dest("."));

});

gulp.task("js", function () {

    // jQuery
    gulp.src("bower_components/jquery/jquery.min.*")
        .pipe(gulp.dest("Scripts"));

    // Modernizr
    gulp.src("bower_components/modernizer/modernizr.js")
        .pipe(gulp.dest("Scripts"));

    // Respond
    gulp.src("bower_components/respond/respond.min.js")
        .pipe(gulp.dest("Scripts"));

    // MSAjaxBundle
    gulp.src("Scripts/WebForms/MSAjax/*.js")
        .pipe(concat("Scripts/MSAjax.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("."));

    // WebFormsBundle
    gulp.src("Scripts/WebForms/*.js")
        .pipe(concat("Scripts/WebForms.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("."));

});

gulp.task("watch", function () {

    gulp.watch(["Content/site.css"], ["min-css"]);

});