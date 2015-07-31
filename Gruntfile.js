module.exports = function (grunt) {
  "use strict";

  // Display the execution time when tasks are run:
  require("time-grunt")(grunt);

  // Load grunt tasks automatically
  require("load-grunt-tasks")(grunt);

  var paths = {
    src: "./src",
    tmp: "./.tmp",
    dist: "./dist",
    test: "./test",
  };

  grunt.initConfig({
    paths: paths,

    watch: {
      livereload: {
        files: [
          "<%= paths.src %>/**/*.html",
          "<%= paths.src %>{,*/}*.css",
          "<%= paths.src %>/**/*.js",
          "<%= paths.tmp %>/**/*.css",
        ],
        options: {
          livereload: true,
        },
      },

      testing: {
        files: [
          "<%= paths.test %>/app/**/*.spec.js",
        ],
        tasks: ["karma"],
      },

      javascript: {
        files: [
          "<%= paths.src %>/**/*.js"
        ],
        tasks: ["jshint:app"],
      },

      sass: {
        files: ["<%= paths.src %>/styles/**/*.scss"],
        tasks: ["sass"]
      }
    },

    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        hostname: "localhost",
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              connect.static(".tmp"),
              connect().use("/bower_components", connect.static("./bower_components")),
              connect.static(paths.src),
            ];
          }
        },
      },
      dist: {
        options: {
          base: "<%= paths.dist %>",
          livereload: false,
        },
      },
    },

    sass: {
      vendor: {
        files: [{
          "<%= paths.tmp %>/styles/vendor.css": "<%= paths.src %>/styles/vendor/vendor.scss",
        }],
      },
      app: {
        files: [{
          expand: true,
          cwd: "<%= paths.src %>/styles",
          src: ["{,*/}*.scss", "!vendor/**"],
          dest: ".tmp/styles",
          ext: ".css",
        }],
        options: {
          style: "compressed",
        },
      }
    },

    // Automatically inject Bower components into the app
    wiredep: {
      app: {
        ignorePath: /^\/|\.\.\//,
        src: ["<%= paths.src %>/index.html"],
        exclude: [
          "bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js",
          "bower_components/jquery/dist/jquery.js",
        ],
      },
    },

    htmlmin: {
      local: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
        },
        files: [{
          // Application views
          expand: true,
          cwd: "<%= paths.dist %>",
          dest: "<%= paths.dist %>",
          src: [
            "*.html",
            "app/{,*/}*.html",
          ],
        }],
      },
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: "<%= paths.src %>/index.html",
      options: {
        dest: "<%= paths.dist %>",
        flow: {
          html: {
            steps: {
              js: ["concat", "uglifyjs"],
              css: ["cssmin"]
            },
            post: {},
          },
        },
      },
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ["<%= paths.dist %>/{,*/}*.html"],
    },

    filerev: {
      dist: {
        src: [
          "<%= paths.dist %>/{,*/}*.js",
          "<%= paths.dist %>/styles/{,*/}*.css",
          "<%= paths.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}",
          "<%= paths.dist %>/styles/fonts/*",
        ]
      }
    },

    copy: {
      html: {
        files: [{
          expand: true,
          cwd: "<%= paths.src %>",
          dest: "<%= paths.dist %>",
          src: [
            "*.html",
            "app/{,*/}*.html",
          ],
        }],
      },
    },

    ngAnnotate: {
      app: {
        files: {
          "<%= paths.tmp %>/concat/app.js": ["<%= paths.tmp %>/concat/app.js"] // the concatenated app files, pre-uglified
        },
      },
    },

    jshint: {
      options: {
        jshintrc: ".jshintrc",
        reporter: require("jshint-stylish"),
      },
      grunt: [
        "Gruntfile.js",
      ],
      app: [
        "<%= paths.src %>/**/*.js",
      ],
      test: {
        options: {
          ignores: [
            "<%= paths.test %>/coverage",
          ],
        src: ["<%= paths.test %>/**/*.js"],
        },
      },
    },

    karma: {
      unit: {
        configFile: "./karma.conf.js",
        singleRun: true,
      }
    },

    protractor: {
      options: {
        configFile: "e2e.conf.js",
      },
      all: {},
    },

    clean: {
      tmp: "<%= paths.tmp %>",
      dist: "<%= paths.dist %>",
      coverage: "<%= paths.test %>/coverage",
    },

    "divshot:push": {
      development: {
        // options
      }
    }
  });

  grunt.registerTask("serve", [
    "clean",
    "wiredep",
    "sass",
    "jshint",
    "karma",
    "connect:livereload",
    "watch",
  ]);

  grunt.registerTask("build", [
    "clean",
    "wiredep",
    "sass",
    "useminPrepare",
    "cssmin:generated", // generated by useminPrepare
    "concat:generated", // generated by useminPrepare
    "ngAnnotate",
    "uglify:generated", // generated by useminPrepare
    "copy",
    "filerev",
    "usemin",
    "htmlmin",
    "jshint",
    "karma",
  ]);

  grunt.registerTask("test", [
    "clean:coverage",
    "jshint:test",
    "karma",
  ]);

  grunt.registerTask("test:e2e", ["protractor"]);
};