/* Exports an object that defines
 *  all of the paths & globs that the project
 *  is concerned with.
 *
 * The "configure" task will require this file and
 *  then re-initialize the grunt config such that
 *  directives like <config:files.js.app> will work
 *  regardless of the point you're at in the build
 *  lifecycle.
 *
 * You can find the parent object in: node_modules/lineman/config/files.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('files', {
  ngtemplates: {
    dest: "generated/angular/template-cache.js"
  },

  js: {
    vendor: [      
      "bower_components/underscore/underscore.js",
      "bower_components/underscore.string/lib/underscore.string.js",
      "bower_components/angular/angular.js",
      "bower_components/angular-cookies/angular-cookies.js",
      "bower_components/angular-route/angular-route.js",
      "bower_components/angular-bootstrap/ui-bootstrap.js",
      "bower_components/angular-ui-router/release/angular-ui-router.js"
    ],
    app: [
      "app/js/app.js",
      "app/js/**/*.js"
    ]
  },

  less: {

    app: [ "app/css/**/*.less" ],
    vendor: [ 
      "vendor/css/bootstrap.css", 
      "vendor/css/bootstrap-responsive.css", 
      "vendor/css/**/*.less" 
    ]

  }
});
