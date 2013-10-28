/*
 * grunt-requirejs-bundle
 * https://github.com/cajones/grunt-requirejs-bundle
 *
 * Copyright (c) 2013 Chris Jones
 * Licensed under the MIT license.
 */

'use strict';

var AMDBundleProcesses = require('./AMDBundleProcesses');

module.exports = function(grunt) {

    var defaultOptions = {}

    grunt.registerMultiTask('requirejs-bundle', 'Grunt plugin to bundle one or more amd packages into a single define statement. This means you can just require the bundle and get all the packages loaded via requirejs.', function() {
        var bundler = new AMDBundleProcesses(grunt),
            isDirectory = bundler.isDirectory.bind(bundler),
            enumerateInstalledPackages  = bundler.enumerateInstalledPackages.bind(bundler),
            buildAMDModuleDefinition = bundler.buildAMDModuleDefinition.bind(bundler);



        this.files.forEach(function (file) {
            var defineStatement = file.src.filter(isDirectory)
                                       .map(enumerateInstalledPackages)
                                       .reduce(buildAMDModuleDefinition, 'define([') + ']);'

            console.log(defineStatement);
            grunt.file.write(file.dest, defineStatement);
        });

    });

};
