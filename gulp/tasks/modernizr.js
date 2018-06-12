// gulp-modernizr lets us build our own custom copy of modernizr to test only
// for the features we care about.
var gulp = require("gulp"),
    modernizr = require("gulp-modernizr");

gulp.task("modernizr", function() {
    // Search through all CSS and JS files within the `assets` directory,
    // looking for features that may have compatibility issues.
    return gulp.src(["./app/assets/styles/**/*.css", "./app/assets/scripts/**/*.js"])
        // Append classes that reflect browser supported features.
        // E.g., `.no-flex` would be appended if the browser doesn't support flexboxes.
        .pipe(modernizr({
            "options": [
                "setClasses"
            ]
        }))
        .pipe(gulp.dest("./app/temp/scripts/"));
});
