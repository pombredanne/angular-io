/*globals
LOG_DISABLE:true, LOG_ERROR:true, LOG_WARN:true, LOG_INFO:true, LOG_DEBUG:true,
JASMINE:true, JASMINE_ADAPTER:true,
*/

// Testacular configuration
// http://www.yearofmoo.com/2013/01/full-spectrum-testing-with-angularjs-and-testacular.html

// base path, that will be used to resolve files and exclude
var basePath = '..',

//frameworks = ['jasmine'];

// list of files / patterns to load in the browser
files = [
  JASMINE, JASMINE_ADAPTER,
  'test/lib/angular.js',
  'test/lib//angular-mocks.js',
  
  'src/scripts/app.sample.js',
  'src/scripts/lib/**/*.js',
  'src/scripts/filters/*.js',
  'src/scripts/directives/*.js',
  'test/unit/filters/*.js'
],

// list of files to exclude
exclude = [],

// use dots reporter, as travis terminal does not support escaping sequences
// possible values: 'dots', 'progress', 'junit', 'teamcity'
// CLI --reporters progress
reporters = ['progress', 'junit'],

junitReporter = {
  // will be resolved to basePath (in the same way as files/exclude patterns)
  outputFile: 'test-results.xml'
},

// web server port
// CLI --port 9876
port = 9876,

// cli runner port
// CLI --runner-port 9100
runnerPort = 9100,

// enable / disable colors in the output (reporters and logs)
colors = true,

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO,

// enable / disable watching file and executing tests whenever any file changes
autoWatch = false,

// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari
// - PhantomJS
browsers = ['PhantomJS'],

// If browser does not capture in given timeout [ms], kill it
// CLI --capture-timeout 5000
//captureTimeout = 5000;

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false,

// report which specs are slower than 500ms
// CLI --report-slower-than 500
reportSlowerThan = 500,

// compile coffee scripts
preprocessors = {
  //'**/*.coffee': 'coffee'
},

plugins = [
  'karma-jasmine',
  'karma-chrome-launcher',
  'karma-firefox-launcher',
  'karma-junit-reporter'
];
