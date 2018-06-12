var path = require("path");

// Bundles all JS files with random name, and exports to `temp` directory.
module.exports = {
    // Take these files as the source.
    entry: {
        App: "./app/assets/scripts/App.js",
        Vendor: "./app/assets/scripts/Vendor.js"
    },

    // Export bundled file to this location.
    output: {
        path: path.resolve(__dirname, "./app/temp/scripts"),
        filename: "[name].js"
    },

    // Convert our ES6-JS into vanilla JS.
    module: {
        loaders: [
            {
                loader: "babel-loader",

                query: {
                    // We're using ES6 presets.
                    presets: ["es2015"]
                },

                // This is regex for JS-only files.
                test: /\.js$/,

                // This is regex for excluding the node_modules directory.
                exclude: /node_modules/
            }
        ]
    }
};
