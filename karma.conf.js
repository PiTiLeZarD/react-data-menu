module.exports = function (config) {
    config.set({
        browsers: ["Chrome"],
        singleRun: true,
        frameworks: ["mocha", "parcel"],
        files: ["tests/*.jsx"],
        reporters: ["dots"],
    });
};
