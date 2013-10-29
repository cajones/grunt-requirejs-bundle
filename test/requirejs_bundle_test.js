'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports['requirejs-bundle'] = {
  setUp: function(done) {
    done();
  },
  bundle: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/components.js');
    var expected = grunt.file.read('test/expected/components.js');
    test.equal(actual, expected, 'should bundle all of the packages into a single AMD define statement and create the file');

    test.done();
  },
  donotbundleifempty: function(test) {
    test.expect(1);

    var actual = grunt.file.exists('tmp/themes.js');
    var expected = !(grunt.file.expand('test/fixtures/themes/*/bower.json').length === 0); //false if there are no packages installed to this directory
    test.equal(actual, expected, 'should not create a module if there are no packages.');

    test.done();    
  }
};
