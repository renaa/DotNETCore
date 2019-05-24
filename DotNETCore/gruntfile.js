﻿

/// <binding BeforeBuild='default' AfterBuild='default' Clean='default' />
module.exports = function (grunt) {

    const sass = require('node-sass');



    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Sass
        sass: {
            options: {
                implementation: sass,
                sourceMap: true, // Create source map
                outputStyle: 'compressed' // Minify output

            },
            dist: {
                files: [
                    {
                        expand: true, // Recursive
                        cwd: "Styles", // The startup directory
                        src: ["**/*.scss"], // Source files
                        dest: "wwwroot/css", // Destination
                        ext: ".css" // File extension
                    }
                ]
            }
        }
    });
    // Load the plugin
    grunt.loadNpmTasks('grunt-sass');
    // Default task(s).
    grunt.registerTask('default', ['sass']);
};