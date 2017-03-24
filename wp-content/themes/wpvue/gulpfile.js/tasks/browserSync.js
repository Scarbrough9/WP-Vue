var gulp         = require('gulp'),
    config       = require('../config'),
    browserSync  = require('browser-sync'),
    watchedFiles = [
        config.watch.public,
        config.watch.php
    ];

gulp.task('browser-sync', ['styles', 'scripts', 'build:development'], function() {
    browserSync.init(watchedFiles, {
        proxy: {
            // This is the link to your local as it is in MAMP
            target: config.browserSync.target,
        },
        // This is what displays with port 3000
        host: config.browserSync.host,
        // This is if you want to change the port
        // port: 4000,
        // This tells browser sync what URL to open on load
        open: "external",
        snippetOptions: {
            ignorePaths: [
                "wp-admin/**",
                "wp/wp-admin/**"
            ]
        }
    });
});
