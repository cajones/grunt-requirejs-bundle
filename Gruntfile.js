/*
 * grunt-requirejs-bundle
 * https://github.com/cajones/grunt-requirejs-bundle
 *
 * Copyright (c) 2013 Chris Jones
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    'requirejs-bundle': {
      components: {
        src: 'test/fixtures/components/',
        dest: 'tmp/components.js',
        options: {
          requireCall: 'require',
          moduleName: 'components',
          baseUrl: 'test/fixtures'
        }
      },
      empty: {
        src: 'test/fixtures/themes/',
        dest: 'tmp/themes.js',
        options: {
          requireCall: 'define',
          moduleName: 'themes',
          baseUrl: 'test/fixtures'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'requirejs-bundle', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
