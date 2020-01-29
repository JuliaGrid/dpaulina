var gulp = require("gulp");
var less = require('gulp-less');
var path = require('path');
var plumber = require('gulp-plumber');
var autoprefixer = require("autoprefixer");
var del = require("del");
var server = require("browser-sync").create();
 
gulp.task("style", function () {
    return gulp.src('./app/less/**/*.less')
      .pipe(less({
        paths: [ path.join(__dirname, 'less', 'includes') ]
      }))
      .pipe(gulp.dest('./app/css'));
  });

/*gulp.task("server", function() {
    server.init({         
      server: "app/",        
    });
  }); */

  gulp.task("server", function () {
    server.init({
        server: "app/",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });
    gulp.watch("app/less/*.less", gulp.series("style"));
    gulp.watch("app/*.html").on("change", server.reload);
});

  gulp.task("clean", function() {
    return del("build");
  });

  gulp.task("start", gulp.series("clean", "style", "server"));