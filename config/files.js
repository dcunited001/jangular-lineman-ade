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
      "bower_components/angular/angular.js",
      "bower_components/angular-route/angular-route.js"
      // "bower_components/ui-bootstrap.js",
      // "bower_components/angular-ui-router.js"
    ],
    app: [
      "app/js/app.js",
      "app/js/**/*.js"
    ]
  },

  less: {
    compile: {
      options: {
        paths: [
          "bower_components/bootstrap/dist/css/bootstrap.css",
          "bower_components/bootstrap/dist/css/bootstrap-theme.css",
          // "vendor/css/normalize.css",
          // "vendor/css/foundation.min.css",
          "app/css/**/*.less"]
      }
    }
  }
});
