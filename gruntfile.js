module.exports = function(grunt) {
  grunt.initConfig ({
    watch: {
        options: {
          livereload: true, // needed to run LiveReload
        },
        css: {
          files: ['public/scss/*.scss'],
          tasks: ['compass'],
        },
    },
    sass: {
      dist: {
        files: {
          'public/stylesheets/style.css' : 'sass/style.scss'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.registerTask('default', ['sass']);
  grunt.loadNpmTasks('grunt-contrib-watch');
};