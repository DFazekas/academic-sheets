var gulp = require("gulp"),
    webpack = require("webpack");

gulp.task("scripts", ["modernizr"], function(callback) {
    // Automate Webpack.
    webpack(require("../../webpack.config.js"), function(err, stats) {
        if (err) {
            // Print error, if any.
            console.log(err.toString());
        }

        // Print status.
        console.log(stats.toString());

        // Inform Node that task is complete.
        callback();
    });
});
