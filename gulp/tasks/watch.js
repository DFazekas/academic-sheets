var gulp = require('gulp'),
  watch = require('gulp-watch'),
  browserSync = require('browser-sync').create();

gulp.task('watch', function() {
  browserSync.init({
    // Hides the sync browser notification.
    notify: false,
    // Sets up the 'app' directory as the local server.
    server: {
      baseDir: "app"
    }
  });

  watch('./app/index.html', function() {
    // When index.html changes, refresh the browser.
    browserSync.reload();
  });

  watch('./app/assets/scripts/**/*.js', function() {
      // Watch changes on any JS file in the 'scripts' directory.
      // Trigger `scriptsRefresh` task.
      gulp.start("scriptsRefresh");
  });

  watch('./app/assets/styles/**/*.css', function() {
      // Watch changes on any CSS file in the 'styles' directory.
      // Trigger `cssInject` task.
      gulp.start("cssInject");
  });
});

gulp.task("cssInject", ["styles"], function() {
    // First trigger `styles` task, then inject the latest temp CSS
    // into the browser without forcing a refresh.
    return gulp.src("./app/temp/styles/styles.css")
        .pipe(browserSync.stream());
});

gulp.task("scriptsRefresh", ["scripts"], function() {
    // First trigger `scripts` task, then refreah the browser to apply
    // the latest temp JS.
    browserSync.reload();
});
