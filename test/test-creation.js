/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('powder generator', function() {
    beforeEach(function(done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function(
            err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('powder:app', ['../../app']);
            done();
        }.bind(this));
    });

    it('creates expected files', function(done) {
        var expected = [
            // add files you expect to exist here.
            '.jshintrc',
            '.jscsrc',
            'server/index.js',
            'client/bower.json',
            'config.js',
            'gulpfile.js',
            'package.json',
            'README.md'
        ];

        helpers.mockPrompt(this.app, {
            'addServer': true
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function() {
            helpers.assertFile(expected);
            done();
        });
    });
});
