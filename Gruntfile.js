module.exports = function (grunt) {
  grunt.initConfig({

    standard: {
      app: {
        src: ['{,client/scripts/}*.js']
      }
    },
    watch: {
      files: ['client/**/*.{js,css}'],
      tasks: ['standard', 'uglify', 'cssmin']
    },
    copy: {
      main: {
        files: [{
          expand: true,
          cwd: 'node_modules',
          src: ['angular/**', 'angular-animate/**', 'angular-aria/**', 'angular-material/**', 'angular-messages/**', 'angular-route/**', 'angularfire/**', 'firebase/**'],
          dest: 'public/assets/vendors'
        } ]
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      app: {
        files: {
          'public/assets/scripts/client.min.js': ['client/scripts/*.js']
        }
      }
    },
    cssmin: {
      app: {
        files: [{
          expand: true,
          cwd: 'client/styles',
          src: ['*.css', '!*.min.css'],
          dest: 'public/assets/styles',
          ext: '.min.css'
        }]
      }
    }
  })

  grunt.loadNpmTasks('@4cm4k1/grunt-standard')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-cssmin')

  grunt.registerTask('default', ['standard', 'uglify', 'cssmin', 'watch'])
}
