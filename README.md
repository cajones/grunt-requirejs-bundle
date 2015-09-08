# grunt-requirejs-bundle

> A Grunt plugin to bundle one or more AMD packages into a single define statement. This means you can just require the bundle and get all the packages loaded via requirejs.

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-requirejs-bundle --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-requirejs-bundle');
```

## The "requirejs-bundle" task

### Overview
In your project's Gruntfile, add a section named `requirejs-bundle` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'requirejs-bundle': {
    components: {
      src: 'src/components/',
      dest: 'tmp/components.js'   
    },
    extensions: {
      src: 'src/extensions/',
      dest: 'tmp/extensions.js'   
    },
  },
})
```

The `requirejs-bundle` task will enumerate all Bower packages (containing bower.json) in the provided src directory and build them into a single AMD statement.

```js
define(["package1", "package2", "package3" /*and so on*/])
```

#### Package Main File
The path to the main javascript file is identified by the 'main' property in each packages bower.json, if this is not present then index.js will be assumed.

### Options

#### options.baseUrl
Type: `String`
Default value: undefined

Paths of source files globbed in the src parameter can be treated as relative to this path. 

#### options.include
Type: `String`
Default value: `'*'`

Packages that are bundled with this task are only included if their name matches this grunt filespec pattern.

#### options.moduleName
Type: `String`
Default value: `'.'`

The AMD call will be called with this as the first parameter.

#### options.requireCall
Type: `String`
Default value: `'require'`
Possible values: `'require'` or `'define'`

The requirejs-bundle task will emit either an AMD require statement or an AMD define.
The default is an AMD require.

#### options.appOverrideUrl
Type: `String`
Default value: `undefined`

Directory to look for overrides in. Files found in this directory will superceed the files found elsewhere.
Requires `options.requireOverrideBaseUrl` to be set.


#### options.requireOverrideBaseUrl
Type: `String`
Default value: `undefined`

The require path to prepend to each overridden file.
Requires `options.appOverrideUrl` to be set.

```js
define("module-name", ["package1", "package2", "package3" /*and so on*/])
```

#### Options Example
In this example, custom options are used bundle all the packages in the components directory into a single AMD module called 'my-components', the module is going to be compiled by [requirejs](http://requirejs.org/) with the baseUrl set to 'src', so we also set the 'requirejs-bundle' baseUrl to make the paths the same.

```js
grunt.initConfig({
  requirejs_bundle: {
    src: 'src/components/',
    dest: 'tmp/my-components.js'
    options: {
      moduleName: 'my-components',
      baseUrl: 'src'
    }
  },
})
```

Assuming we have a two bower packages (package1 and package2) in the components directory, the resulting AMD module will look like this:-

```js
define("my-components", ["components/package1/index", "components/package1/index"]);
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.0.8 - Fixed a bug that added the module name to require() calls
* 0.0.7 - Added support for requireCall option
* 0.0.6 - expand the full package name
* 0.0.5 
* 0.0.4 
* 0.0.3 
* 0.0.2 
* 0.0.1 
