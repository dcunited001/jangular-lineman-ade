/* Exports an object that defines
 *  all of the configuration needed by the projects'
 *  depended-on grunt tasks.
 *
 * You can find the parent object in: node_modules/lineman/config/application.coffee
 */

module.exports = require(process.env['LINEMAN_MAIN']).config.extend('application', {

  // api proxy server configuration to link up with rails-api
  server: {
    pushState: true,
    apiProxy: {
      enabled: true,
      host: 'localhost',
      port: 3000,
      prefix: 'api'
    }
  },

  // configure lineman to load additional angular & jade related npm tasks
  loadNpmTasks: [
    "grunt-angular-templates",
    "grunt-ngmin",
    "grunt-contrib-jade",
    //"grunt-contrib-clean",
  ],

  // we don't have handlebars templates or coffeescript by default
  removeTasks: {
    common: ["handlebars", "coffee"]
  },

  // task override configuration
  prependTasks: {
    dist: ["ngmin"],                // ngmin should run in dist only, to produce minified output (haven't tested)
    common: ["jade", "ngtemplates"] // jade/ngtemplates runs in dist and dev
  },

  pages: {
    dev: {
      context: {
        apiUrl: "http://localhost:3000"
      }
    },
    dist: {
      context: {
        // TODO: pull from env var for staging/production
        apiUrl: "http://ng-rails-stack.herokuapp.com"
      }
    }
  },

  // configuration for jade templates
  // - converts jade => html
  jade: {
    app: {

      options: {
        pretty: true,
        data: {
          pkg: "<%= pkg %>"
          // found pkg in the lineman source,
          // - but can't figure out how js/css
          // passed through to the templates'
          //,css: "<%= css %>"
          //,js: "<%= js %>"
        }
      },

      expand: true,            // expand the glob
      cwd: "app/templates",    // where the templates are contained
      src: ["**/*.jade"],      // the files to glob
      dest: "generated/jade/", // where the html is placed
      ext: ".html"             // output extension
    }
  },

  // configuration for grunt-angular-templates
  ngtemplates: {
    RailsStackApp: { // "app" matches the name of the angular module defined in app.js
      options: {
        base: "generated/jade"
      },
      src: "generated/jade/**/*.html",
      dest: "generated/angular/template-cache.js"
    }
  },

  // configuration for grunt-ngmin, this happens _after_ concat once, which is the ngmin ideal :)
  ngmin: {
    js: {
      src: "<%= files.js.concatenated %>",
      dest: "<%= files.js.concatenated %>"
    }
  },

  // grunt-angular-templates expects that a module already be defined to inject into
  // this configuration orders the template inclusion _after_ the app level module
  concat: {
    js: {
      src: ["<banner:meta.banner>", "<%= files.js.vendor %>", "<%= files.coffee.generated %>", "<%= files.js.app %>", "<%= files.ngtemplates.dest %>"],
      separator: ";"
    }
  },

  // configures grunt-watch-nospawn to listen for changes to, and recompile angular templates
  watch: {
    jade: {
      files: "app/templates/**/*.jade",
      tasks: ["jade", "ngtemplates", "concat"]
    }
  }

});
