var gulp = require("gulp"),
    postcss = require("gulp-postcss"),
    cssImport = require("postcss-import"),
    mixins = require("postcss-mixins"),
    cssvars = require("postcss-simple-vars"),
    nested = require("postcss-nested"),
    hexrgba = require("postcss-hexrgba"),
    autoprefixer = require("autoprefixer");

gulp.task("styles", function() {
    // Take the flavoured styles.css file, pipe it through numerous frameworks to translate into
    // vanilla CSS that the browser can read, catching any errors along the way, and
    // exporting to the 'temp' directory.
    return gulp.src("./app/assets/styles/styles.css")
        // "cssImport" = replaces references of `import` in stylesheets with associated file content.
        // "mixins" = groups of reusable variable-accepting styles ( `@mixin name{}` ).
        // "cssvars" = allows variables in stylesheets ( `$column: 200px;` ).
        // "nested" = unwraps nested styles ( `&childNode{}` ).
        // "hexrgba" = allows inserting hex value in rgba parameters ( `rgba(#FFF), 0.8` ).
        // "autoprefixer" = parses CSS to add browser compatible prefixes.
        .pipe(postcss([cssImport, mixins, cssvars, nested, hexrgba, autoprefixer]))
        .on("error", function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit("end");
        })
        .pipe(gulp.dest('./app/temp/styles'));
});
